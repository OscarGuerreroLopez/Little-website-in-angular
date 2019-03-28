import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "../app-routing.module";
import { LayoutComponent } from "./layout/layout.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DemoMaterialModule } from "../material-module";
import { WindowService } from "../window.service";
import { PhoneHeaderComponent } from './phone-header/phone-header.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, PhoneHeaderComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule
  ],
  exports: [LayoutComponent],
  providers: [{ provide: "windowObject", useValue: window }, WindowService]
})
export class UiModule {}
