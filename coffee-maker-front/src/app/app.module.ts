import { NgModule } from "@angular/core"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { MatButtonModule } from "@angular/material/button"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatSelectModule } from "@angular/material/select"
import { BrowserModule } from "@angular/platform-browser"
import { HttpClientModule } from "@angular/common/http"
import { MatTableModule } from "@angular/material/table"
import { MatPaginatorModule } from "@angular/material/paginator"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { MakeCoffeeComponent } from "./make-coffee/make-coffee.component"
import { MatCheckboxModule } from "@angular/material/checkbox"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { OrdersService } from "./services/orders.service"
import { StatsComponent } from "./stats/stats.component"

@NgModule({
  declarations: [
    AppComponent,
    MakeCoffeeComponent,
    StatsComponent
  ],
  imports: [
    MatCheckboxModule,
    BrowserModule,
    MatButtonModule,
    HttpClientModule,
    AppRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [
    OrdersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
