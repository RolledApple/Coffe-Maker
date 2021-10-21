import { Job, Queue } from "bull"
import { v4 as uuid4 } from "uuid"
import { Repository } from "typeorm"
import { InjectRepository } from "@nestjs/typeorm"
import { SchedulerRegistry } from "@nestjs/schedule"
import { Processor, Process, InjectQueue } from "@nestjs/bull"
import { Order } from "./order.entity"

export interface OrderJob {
  id: string
  delayTime: number
  createdAt: number
}

@Processor("orders")
export class WorkerProcessor {

  constructor(
    private schedulerRegistry: SchedulerRegistry,
    @InjectRepository(Order) private ordersRep: Repository<Order>,
    @InjectQueue("orders") private readonly audioQueue: Queue
  ) {
  }

  @Process("transcode")
  async transcode(job: Job<OrderJob>) {
    if (+job.data.delayTime > 0) {
      const timeout = setTimeout(() => this.makeCoffee(job.data.id), job.data.delayTime)
      this.schedulerRegistry.addTimeout(uuid4(), timeout)
    } else {
      await this.makeCoffee(job.data.id)
    }
    return job.data
  }

  async makeCoffee(id: string) {
    console.info("Cup of coffee created.")
    await this.ordersRep.update(
      { id },
      { isDone: true }
    )
  }
}
