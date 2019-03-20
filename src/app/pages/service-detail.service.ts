import { Injectable } from "@angular/core";

import { ServiceDetails } from "../constants/serviceDetails";

import { ServiceContent } from "../types/interfaces";

@Injectable({
  providedIn: "root"
})
export class ServiceDetailService {
  content: ServiceContent;
  constructor() {}

  selectedPage(page) {
    console.log(page);
    console.log(ServiceDetails[page]);
    this.content = ServiceDetails[page];
  }

  getPage() {
    return this.content;
  }
}
