import { Component, OnInit, OnDestroy } from "@angular/core";
import { ISubscription } from "rxjs/Subscription";
import { Title, Meta } from "@angular/platform-browser";

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

  constructor(
    private locationService: LocationService,
    private titleService: Title,
    private metaTagService: Meta
  ) {}

  ngOnInit() {
    this.showLocation = false;
    this.locationList = this.locationService.getAllLocations();
    this.locationSubscribe = this.locationService.locationSelected$.subscribe(
      locationPicked => {
        this.location = locationPicked;
        this.showLocation = true;
      }
    );

    this.titleService.setTitle("Cerrajeros Alicante");
    this.metaTagService.updateTag({
      name: "description",
      content: "Cerrajeros Alicante"
    });
    this.metaTagService.updateTag({
      name: "Cerrajero Localidades",
      content: "Cerrajeros Alicante"
    });
    // TODO: Make Other top-level components do this so the above content doesn't get stuck there!
  }

  locationSelected(location) {
    this.locationService.selectedLocation(location);
  }

  ngOnDestroy() {
    this.locationSubscribe.unsubscribe();
  }
}
