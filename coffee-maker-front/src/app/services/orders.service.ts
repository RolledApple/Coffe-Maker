import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable, of } from "rxjs"
import { CoffeeInDto } from "../dtos/coffee-in-dto"
import { CoffeeOutDto } from "../dtos/coffee-out-dto"
import { Order } from "../models/order"

@Injectable({
  providedIn: "root"
})
export class OrdersService {
  private coffeeUrl = "http://localhost:3000/api/orders"

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  }

  constructor(private http: HttpClient) {
  }

  createOrder(dto: CoffeeInDto, isBoss: boolean): Observable<CoffeeOutDto> {
    const options = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": isBoss ? "BOSS" : "SIMPLE"
      }
    }
    return this.http.post<CoffeeOutDto>(
      this.coffeeUrl,
      dto,
      options
    )
  }

  getOrders(month: number): Observable<Order[]> {
    const options = {
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        month
      }
    }
    return this.http.get<Order[]>(
      this.coffeeUrl,
      options
    )
  }
}
