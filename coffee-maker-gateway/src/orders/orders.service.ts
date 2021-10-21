import { Queue } from "bull"
import { v4 as uuid4 } from "uuid"
import { Repository } from "typeorm"
import { InjectQueue } from "@nestjs/bull"
import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"

import { Order } from "../order.entity"

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order) private ordersRep: Repository<Order>,
    @InjectQueue("orders") private readonly orderQueue: Queue
  ) {
  }

  async createOrder(isBoss: boolean, waitingTime: number) {
    const delayTime = waitingTime * 60 * 1000
    const now = new Date()
    const order: Order = {
      id: uuid4(),
      isBoss,
      delayTime,
      isDone: false,
      month: now.getMonth(),
      createdAt: now.getTime()
    }
    await this.ordersRep.save(order)
    const priority = isBoss ? 1 : 2
    const job = await this.orderQueue.add("transcode", {
        ...order
      }, {
        priority: priority
      }
    )
    return job
  }

  async getAllOrders(month: number) {
    const orders = await this.ordersRep.find({ where: { month } })

    return orders
  }
}
