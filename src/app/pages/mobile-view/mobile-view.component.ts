import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-mobile-view",
  templateUrl: "./mobile-view.component.html",
  styleUrls: ["../home/home.component.css"]
})
export class MobileViewComponent implements OnInit {
  @Input() showMe;
  constructor() {}

  ngOnInit() {}
}
