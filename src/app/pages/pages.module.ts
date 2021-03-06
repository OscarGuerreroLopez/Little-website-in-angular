import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DemoMaterialModule } from "../material-module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { WindowService } from "../window.service";
import { EmailService } from "./email.service";
import { ServiceDetailService } from "./service-detail.service";

import { PagesRoutingModule } from "./pages-routing.module";
import { NormalViewComponent } from "./normal-view/normal-view.component";
import { MobileViewComponent } from "./mobile-view/mobile-view.component";
import { ServiciosComponent } from "./servicios/servicios.component";
import { ContactTopComponent } from "./contact/contact-top.component";
import { ServiciosDetailComponent } from "./servicios-detail/servicios-detail.component";

@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    NormalViewComponent,
    MobileViewComponent,
    ServiciosComponent,
    ContactTopComponent,
    ServiciosDetailComponent
  ],
  imports: [
    CommonModule,
    DemoMaterialModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [HomeComponent],
  providers: [
    { provide: "windowObject", useValue: window },
    WindowService,
    EmailService,
    ServiceDetailService
  ]
})
export class PagesModule {}
