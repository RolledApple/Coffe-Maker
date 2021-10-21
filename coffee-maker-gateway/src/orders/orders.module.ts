import { BullModule } from "@nestjs/bull"
import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm"
import { Order } from "../order.entity"
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';

@Module({
  imports: [
    BullModule.registerQueue({
      name: "orders",
      redis: {
        host: process.env.REDIS_HOST,
        port: +process.env.REDIS_PORT
      }
    }),
    TypeOrmModule.forFeature([Order]),
  ],
  providers: [OrdersService],
  controllers: [OrdersController]
})
export class OrdersModule {}
