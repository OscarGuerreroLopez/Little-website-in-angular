import { Injectable } from "@angular/core";

import { ServiceDetails } from "../constants/serviceDetails";

import { IServiceContent } from "../types/interfaces";

@Injectable({
  providedIn: "root"
})
export class ServiceDetailService {
  content: IServiceContent;
  constructor() {}

  selectedPage(page) {
    this.content = ServiceDetails[page];
  }

  getPage() {
    return this.content;
  }

  getAllServices() {
    return ServiceDetails;
  }
}
