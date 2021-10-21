import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { MakeCoffeeComponent } from "./make-coffee/make-coffee.component"
import { StatsComponent } from "./stats/stats.component"

const routes: Routes = [
  { path: "", redirectTo: "/make-coffee", pathMatch: "full" },
  { path: "make-coffee", component: MakeCoffeeComponent },
  { path: "orders-stats", component: StatsComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
