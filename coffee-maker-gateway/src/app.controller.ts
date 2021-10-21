import { Body, Controller, Get, Post, Headers } from "@nestjs/common"
import { AppService } from "./app.service"

enum Auth {
  Boss = "BOSS",
  Simple = "SIMPLE"
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  // @Get("create-job")
  // async createJob() {
  //   const job = await this.appService.addAJob()
  //   console.log(job.data)
  //
  //   return JSON.stringify(job.data)
  // }
  //
  // @Post("api/order")
  // async createCoffee(
  //   @Headers() headers,
  //   @Body("waitingTime") waitingTime) {
  //   const isBoss = headers.authorization === Auth.Boss
  //   const job = await this.appService.addAJob()
  //   console.log(job.data)
  //
  //   return JSON.stringify(job.data)
  // }
}
