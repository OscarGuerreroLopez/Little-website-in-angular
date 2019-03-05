import { Component, OnInit, OnDestroy } from "@angular/core";
import { WindowService, WindowSize } from "../window.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, OnDestroy {
  private anyErrors: boolean;
  private finished: boolean;
  private subscription;
  private timer;
  private showMe = true;
  private isMobile = false;
  // @Input() name: string;

  constructor(private windowService: WindowService) {}

  ngOnInit() {
    this.subscription = this.windowService.windowSizeChanged.subscribe(
      value => {
        value.width < 768 ? (this.isMobile = true) : (this.isMobile = false);
        if (value.width < 768) {
          this.isMobile = true;
          this.timer = setTimeout(() => {
            this.showMe = false;
          }, 5000);
        } else {
          this.isMobile = false;
        }
      },
      error => (this.anyErrors = true),
      () => (this.finished = true)
    );
  }
  ngOnDestroy() {
    this.subscription = null;
    this.timer = null;
  }
}
