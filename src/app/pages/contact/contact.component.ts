import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { Title, Meta } from "@angular/platform-browser";
import { phoneNumberValidator } from "./phone-validator";
import { EmailService } from "../email.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ContactComponent implements OnInit {
  contactForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.email]),
    phone: new FormControl("", [phoneNumberValidator]),
    text: new FormControl("", [Validators.required])
  });

  showIt = true;

  constructor(
    private emailService: EmailService,
    private titleService: Title,
    private metaTagService: Meta
  ) {}

  ngOnInit() {
    this.showIt = true;
    this.titleService.setTitle("Cerrajeros Alicante");
    this.metaTagService.updateTag({
      name: "description",
      content: "Cerrajeros Alicante"
    });
    this.metaTagService.updateTag({
      name: "Cerrajero Localidades",
      content: "Cerrajeros Alicante"
    });
    // TODO: Make Other top-level components do this so the above content doesn't get stuck there!
  }

  handleSubmit() {
    if (this.contactForm.value.email || this.contactForm.value.phone) {
      this.emailService
        .sendEmail(this.contactForm.value)
        .then(resp => {
          this.showIt = false;
        })
        .catch(err => {
          console.log(err);
          this.showIt = false; // delete for prod
        });
      this.showIt = false;
    }
  }
}
