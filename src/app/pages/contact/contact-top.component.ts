import { Component, OnInit } from "@angular/core";
import { WindowService } from "../../window.service";

@Component({
  selector: "app-contact-top",
  templateUrl: "./contact-top.component.html",
  styleUrls: ["./contact-top.component.css"]
})
export class ContactTopComponent implements OnInit {
  private subscription;
  isMobile = false;
  private anyErrors: boolean;
  private finished: boolean;
  constructor(private windowService: WindowService) {}

  ngOnInit() {
    this.subscription = this.windowService.windowSizeChanged.subscribe(
      value => {
        value.width < 768 ? (this.isMobile = true) : (this.isMobile = false);
        if (value.width < 768) {
          this.isMobile = true;
        } else {
          this.isMobile = false;
        }
      },
      error => (this.anyErrors = true),
      () => (this.finished = true)
    );
  }
}
