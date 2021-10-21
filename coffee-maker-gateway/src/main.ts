import { NestFactory } from "@nestjs/core"
import { NestExpressApplication } from "@nestjs/platform-express"
import { AppModule } from "./app.module"
import { join } from "path"
import { Pool, PoolConfig } from "pg"

async function bootstrap() {
  // const config: PoolConfig = {
  //   host: "postgres",
  //   port: 5432,
  //   database: "postgres",
  //   user: "postgres",
  //   password: "changeme"
  // }
  // const pool = new Pool(config)
  // console.log("pool-----------------------")
  // try {
  //   const query = "CREATE TABLE Persons (PersonID int, LastName varchar(255))"
  //   const res = await pool.query(query)
  //   console.log("+++++++++++++++++++++++++++++", res)
  // } catch (err) {
  //   console.error(err)
  // }
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  app.enableCors()
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
    res.header("Access-Control-Allow-Headers", "Content-Type, Accept, Authorization")
    next()
  })
  app.useStaticAssets(join(__dirname, "..", "public"))
  app.setBaseViewsDir(join(__dirname, "..", "views"))
  app.setViewEngine("hbs")

  await app.listen(process.env.PORT || 3000)
}

bootstrap()
