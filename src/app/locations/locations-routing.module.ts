import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LocationDetailComponent } from "./location-detail/location-detail.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "cerrajero/:loc",
    component: LocationDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsRoutingModule {}
