import { Injectable } from "@angular/core";
import { locations } from "../constants/locations";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LocationService {
  private locationSelected = new Subject<any>();
  public locationSelected$ = this.locationSelected.asObservable();

  constructor() {}

  getAllLocations(): string[] {
    return locations;
  }

  selectedLocation(location) {
    this.locationSelected.next(location);
  }
}
