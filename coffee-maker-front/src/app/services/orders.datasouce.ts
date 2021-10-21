import { CollectionViewer, DataSource } from "@angular/cdk/collections"
import { Observable, BehaviorSubject, of } from "rxjs"
import { catchError, finalize } from "rxjs/operators"
import { Order } from "../models/order"
import { OrdersService } from "./orders.service"


export class OrdersDataSource implements DataSource<Order> {
  private ordersSubject = new BehaviorSubject<Order[]>([])

  private loadingSubject = new BehaviorSubject<boolean>(false)

  public loading$ = this.loadingSubject.asObservable()

  constructor(
    private ordersSvc: OrdersService
  ) {
  }

  loadOrders(
    month: number
  ) {

    this.loadingSubject.next(true)

    this.ordersSvc.getOrders(
      month
    ).pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    )
      .subscribe(orders => this.ordersSubject.next(orders))
  }

  connect(collectionViewer: CollectionViewer): Observable<Order[]> {
    console.log("Connecting data source")
    return this.ordersSubject.asObservable()
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.ordersSubject.complete()
    this.loadingSubject.complete()
  }
}
