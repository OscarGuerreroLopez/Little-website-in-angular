import { Injectable } from "@angular/core";
import axios from "axios";

export interface Contact {
  name: string;
  email?: string;
  phone?: string;
  text: string;
}

@Injectable({
  providedIn: "root"
})
export class EmailService {
  constructor() {}

  sendEmail(contact: Contact): Promise<any> {
    return new Promise((resolve, reject) => {
      axios
        .post("https://www.oscarcomputerguy.com/email", contact)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  }
}
