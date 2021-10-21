import { Module } from "@nestjs/common"
import { Connection } from "typeorm"
import { BullModule } from "@nestjs/bull"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { TypeOrmModule } from "@nestjs/typeorm"
import { ScheduleModule } from "@nestjs/schedule"
import { Order } from "./order.entity"
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot(),
    OrdersModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  constructor(private connection: Connection) {
  }
}
