import { Body, Controller, Get, Headers, Post, Query } from "@nestjs/common"
import { OrdersService } from "./orders.service"

enum Auth {
  Boss = "BOSS",
  Simple = "SIMPLE"
}

@Controller("api/orders")
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {
  }

  @Post("")
  async createOrder(
    @Headers() headers,
    @Body("waitingTime") waitingTime
  ) {
    const isBoss = headers.authorization === Auth.Boss
    const job = await this.ordersService.createOrder(isBoss, waitingTime)
    return JSON.stringify(job.data)
  }

  @Get("")
  async getAllOrders(
    @Query("month") month
  ) {
    const orders = await this.ordersService.getAllOrders(month)

    return JSON.stringify(orders)
  }
}
