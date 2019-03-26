import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LocationsRoutingModule } from "./locations-routing.module";
import { HomeComponent } from "./home/home.component";
import { LocationService } from "./location.service";
import { LocationDetailComponent } from './location-detail/location-detail.component';


@NgModule({
  declarations: [HomeComponent, LocationDetailComponent],
  imports: [CommonModule, LocationsRoutingModule],
  providers: [LocationService]
})
export class LocationsModule {}
