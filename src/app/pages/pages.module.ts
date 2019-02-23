import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DemoMaterialModule } from "../material-module";
import { WindowService } from "./window.service";

@NgModule({
  declarations: [HomeComponent, ContactComponent],
  imports: [CommonModule, DemoMaterialModule, BrowserAnimationsModule],
  exports: [HomeComponent],
  providers: [{ provide: "windowObject", useValue: window }, WindowService]
})
export class PagesModule {}
