import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LocationsRoutingModule } from "./locations-routing.module";
import { HomeComponent } from "./home/home.component";
import { LocationService } from "./location.service";


@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, LocationsRoutingModule],
  providers: [LocationService]
})
export class LocationsModule {}
