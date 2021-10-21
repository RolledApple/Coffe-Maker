import { Router } from "@angular/router"
import { Component, OnInit } from "@angular/core"
import { OrdersService } from "../services/orders.service"

@Component({
  selector: "app-make-coffee",
  templateUrl: "./make-coffee.component.html",
  styleUrls: ["./make-coffee.component.css"]
})
export class MakeCoffeeComponent implements OnInit {
  isBoss: boolean = false
  waitingTime: number = 0

  constructor(
    private router: Router,
    private ordersSvc: OrdersService
  ) {
  }

  ngOnInit(): void {
  }

  goToStatsPage() {
    this.router.navigate([`/orders-stats`])
  }

  order(): void {
    this.ordersSvc.createOrder(
      { waitingTime: this.waitingTime },
      this.isBoss
    ).subscribe(res => console.log(res))
  }
}
