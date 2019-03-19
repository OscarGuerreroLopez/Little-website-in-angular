import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-servicios-detail",
  templateUrl: "./servicios-detail.component.html",
  styleUrls: ["./servicios-detail.component.css"]
})
export class ServiciosDetailComponent implements OnInit {
  param;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.param = this.route.snapshot.paramMap["params"]["id"];
    console.log(this.param);
  }
}
