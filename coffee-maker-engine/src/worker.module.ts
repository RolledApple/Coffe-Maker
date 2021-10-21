import { Module } from "@nestjs/common"
import { BullModule } from "@nestjs/bull"
import { TypeOrmModule } from "@nestjs/typeorm"
import { Order } from "./order.entity"
import { WorkerProcessor } from "./worker.processor"
import { ScheduleModule } from "@nestjs/schedule"

@Module({
  imports: [
    BullModule.registerQueue({
      name: "orders",
      redis: {
        host: process.env.REDIS_HOST,
        port: +process.env.REDIS_PORT
      }
    }),
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([Order]),
  ],
  providers: [WorkerProcessor]
})
export class WorkerModule {
}
