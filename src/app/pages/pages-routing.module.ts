import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { ServiciosComponent } from "./servicios/servicios.component";
import { ServiciosDetailComponent } from "./servicios-detail/servicios-detail.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "servicios",
    component: ServiciosComponent
  },
  {
    path: "serviciosdetail",
    component: ServiciosDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
