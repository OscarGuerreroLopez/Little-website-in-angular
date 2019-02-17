import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from '../material-module';

@NgModule({
  declarations: [HomeComponent, ContactComponent],
  imports: [
    CommonModule,
    DemoMaterialModule,
    BrowserAnimationsModule
  ],
  exports: [HomeComponent]
})
export class PagesModule { }
