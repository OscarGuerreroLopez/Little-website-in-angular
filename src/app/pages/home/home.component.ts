import { Component, OnInit, OnDestroy } from "@angular/core";
import { WindowService, WindowSize } from "../window.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, OnDestroy {
  private values: WindowSize;
  private anyErrors: boolean;
  private finished: boolean;
  private subscription;
  private showMe: boolean;
  // @Input() name: string;

  constructor(private windowService: WindowService) {}

  ngOnInit() {
    this.subscription = this.windowService.windowSizeChanged.subscribe(
      value => (this.values = value),
      error => (this.anyErrors = true),
      () => (this.finished = true)
    );
    this.showMe = true;
  }
  ngOnDestroy() {
    this.subscription = null;
  }

  checkSize() {
    //768 break pont for small devices
    if (this.values.width > 767) {
      return true;
    } else {
      setTimeout(() => {
        this.showMe = false;
      }, 5500);

      return false;
    }
  }
}
