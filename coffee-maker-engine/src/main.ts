import { NestFactory } from "@nestjs/core"
import { Transport } from "@nestjs/microservices"
import { WorkerModule } from "./worker.module"

async function bootstrap() {
  const app = await NestFactory.createMicroservice(WorkerModule, {
    transport: Transport.REDIS,
    options: {
      url: process.env.REDIS_URL
    }
  })

  app.listen().then(() => console.log("Microservice is listening"))
}

bootstrap()
