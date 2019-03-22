import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Title, Meta } from "@angular/platform-browser";
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
    private serviceDetailService: ServiceDetailService,
    private titleService: Title,
    private metaTagService: Meta
  ) {}

  ngOnInit() {
    this.services = Object.keys(this.serviceDetailService.getAllServices());
    this.details = ServiceDetails;
    this.titleService.setTitle("Servicios cerrajeria Alicante");
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

  showDetails(page) {
    this.serviceDetailService.selectedPage(page);
    this.router.navigate(["/serviciosdetail"]);
  }
}
