import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity()
export class Order {
  @PrimaryColumn()
  id: string

  @Column()
  isBoss: boolean

  @Column()
  delayTime: number

  @Column({ default: false })
  isDone: boolean

  @Column({ type: "bigint" })
  createdAt: number

  @Column()
  month: number
}
