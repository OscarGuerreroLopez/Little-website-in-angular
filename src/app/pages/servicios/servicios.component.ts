import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ServiceDetailService } from "../service-detail.service";
import { ServiceDetails } from "../../constants/serviceDetails";

@Component({
  selector: "app-servicios",
  templateUrl: "./servicios.component.html",
  styleUrls: ["./servicios.component.css"]
})
export class ServiciosComponent implements OnInit {
  services: string[];
  details: {};

  constructor(
    private router: Router,
    private serviceDetailService: ServiceDetailService
  ) {}

  ngOnInit() {
    this.services = Object.keys(this.serviceDetailService.getAllServices());
    this.details = ServiceDetails;
    console.log(this.services);
    console.log(this.details["Locks"].title);
  }

  showDetails(page) {
    this.serviceDetailService.selectedPage(page);
    this.router.navigate(["/serviciosdetail"]);
  }
}
