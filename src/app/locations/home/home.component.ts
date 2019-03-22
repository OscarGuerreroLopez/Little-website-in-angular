import { Component, OnInit, OnDestroy } from "@angular/core";
import { ISubscription } from "rxjs/Subscription";
import { LocationService } from "../location.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, OnDestroy {
  locationList: string[];
  location: string;
  private locationSubscribe: ISubscription;
  showLocation = false;

  constructor(private locationService: LocationService) {}

  ngOnInit() {
    this.showLocation = false;
    this.locationList = this.locationService.getAllLocations();
    this.locationSubscribe = this.locationService.locationSelected$.subscribe(
      locationPicked => {
        this.location = locationPicked;
        this.showLocation = true;
      }
    );
  }

  locationSelected(location) {
    this.locationService.selectedLocation(location);
    // const el = document.getElementById(location);
    // console.log(window.pageYOffset);

    // console.log(el.getBoundingClientRect());
    // const pos = el.getBoundingClientRect();
    // console.log(window.innerHeight);
    // const ande = window.innerHeight + pos.height;
    // console.log(ande);
    // el.scrollIntoView({
    //   behavior: "smooth",
    //   block: "nearest",
    //   inline: "nearest"
    // });
  }

  ngOnDestroy() {
    this.locationSubscribe.unsubscribe();
  }
}
