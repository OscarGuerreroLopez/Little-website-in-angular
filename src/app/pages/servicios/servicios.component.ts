import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ServiceDetailService } from "../service-detail.service";

@Component({
  selector: "app-servicios",
  templateUrl: "./servicios.component.html",
  styleUrls: ["./servicios.component.css"]
})
export class ServiciosComponent implements OnInit {
  constructor(
    private router: Router,
    private serviceDetailService: ServiceDetailService
  ) {}

  ngOnInit() {}

  showDetails(page) {
    this.serviceDetailService.selectedPage(page);
    this.router.navigate(["/serviciosdetail"]);
  }
}
