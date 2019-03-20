import { Component, OnInit } from "@angular/core";

import { ServiceDetailService } from "../service-detail.service";
import { IServiceContent } from "../../types/interfaces";

@Component({
  selector: "app-servicios-detail",
  templateUrl: "./servicios-detail.component.html",
  styleUrls: ["./servicios-detail.component.css"]
})
export class ServiciosDetailComponent implements OnInit {
  content: IServiceContent;

  constructor(private serviceDetailService: ServiceDetailService) {}

  ngOnInit() {
    this.content = this.serviceDetailService.getPage();
  }
}
