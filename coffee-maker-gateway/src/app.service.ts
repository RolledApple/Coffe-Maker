import { Injectable } from "@nestjs/common"
import { InjectQueue } from "@nestjs/bull"
import { Queue } from "bull"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { u4 as uuid4 } from "uuid"
import { Order } from "./order.entity"

@Injectable()
export class AppService {

  // constructor(
  //   // @InjectRepository(Order) private ordersRep: Repository<Order>,
  //   @InjectQueue("orders") private readonly orderQueue: Queue
  // ) {
  // }

  // async addAJob() {
  //   const job = await this.orderQueue.add("transcode", {
  //     foo: "bull job"
  //   }, { delay: 5000 })
  //   return job
  // }
  //
  // async createOrder(isBoss: boolean, waitingTime: number) {
  //   const delayTime = waitingTime * 60 * 1000
  //   // const order = await this.ordersRep.create({
  //   //   id: uuid4(),
  //   //   isBoss,
  //   //   delayTime,
  //   //   createdAt: new Date().getTime()
  //   // })
  //   // const priority = isBoss ? 1 : 2
  //   // const job = await this.orderQueue.add("transcode", {
  //   //     ...order
  //   //   }, {
  //   //     priority: priority
  //   //   }
  //   // )
  //   // return job
  // }
}
