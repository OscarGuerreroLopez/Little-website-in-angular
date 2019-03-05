import { Component, OnInit, ViewEncapsulation, Input } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
  encapsulation: ViewEncapsulation.Native
})
export class ContactComponent implements OnInit {
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);
  constructor() {}

  ngOnInit() {}
}
