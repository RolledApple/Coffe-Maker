import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core"
import { FormControl } from "@angular/forms"
import { OrdersDataSource } from "../services/orders.datasouce"
import { OrdersService } from "../services/orders.service"

@Component({
  selector: "app-stats",
  templateUrl: "./stats.component.html",
  styleUrls: ["./stats.component.css"]
})
export class StatsComponent implements OnInit {
  month = new FormControl()
  monthsList = [
    { id: 0, text: "January" },
    { id: 1, text: "February" },
    { id: 2, text: "March" },
    { id: 3, text: "April" },
    { id: 4, text: "May" },
    { id: 5, text: "June" },
    { id: 6, text: "July" },
    { id: 7, text: "August" },
    { id: 8, text: "September" },
    { id: 9, text: "October" },
    { id: 10, text: "November" },
    { id: 11, text: "December" }
  ]

  displayedColumns = [
    "id",
    "isBoss",
    "isDone",
    "delayTime",
    "createdAt"
  ]
  dataSource: OrdersDataSource

  constructor(private ordersSvc: OrdersService) {
  }

  ngOnInit(): void {
    this.dataSource = new OrdersDataSource(this.ordersSvc)
    const currentMonth = new Date().getMonth()
    this.dataSource.loadOrders(currentMonth)
    this.month.setValue(this.monthsList.find(x => x.id === currentMonth))
  }

  loadOrders() {
    this.dataSource.loadOrders(this.month.value)
  }
}
