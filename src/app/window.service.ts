import { Injectable, Inject } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs/Rx";

export interface WindowSize {
  height: number;
  width: number;
}

@Injectable({
  providedIn: "root"
})
export class WindowService {
  constructor(@Inject("windowObject") private window: Window) {
    Observable.fromEvent(window, "resize")
      .auditTime(100)
      .map(
        event =>
          <WindowSize>{
            width: window.innerWidth,
            height: window.innerHeight
          }
      )
      .subscribe(windowSize => {
        this.windowSizeChanged.next(windowSize);
      });
  }

  windowSizeChanged = new BehaviorSubject<WindowSize>(<WindowSize>{
    width: this.window.innerWidth,
    height: this.window.innerHeight
  });
}
