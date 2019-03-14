import { Component, OnInit, ViewEncapsulation, Input } from "@angular/core";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { phoneNumberValidator } from "./phone-validator";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
  encapsulation: ViewEncapsulation.Native
})
export class ContactComponent implements OnInit {
  contactForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.email]),
    phone: new FormControl("", [phoneNumberValidator]),
    text: new FormControl("")
  });

  name = new FormControl("");

  profileForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl("")
  });

  constructor() {}

  ngOnInit() {}

  handleSubmit() {
    console.log(this.contactForm.value);
  }

  onClickSubmit() {
    console.log(this.profileForm.value);
  }

  updateName() {
    this.name.setValue("Nancy");
  }
}
