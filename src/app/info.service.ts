import { Injectable } from '@angular/core';
import {Location} from "./location";

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor() { }

  private company = {
    name: {
      full: "Restful Mind Mental Health",
      short: "Restful Mind"
    },
    phoneNumber: "(206) 620-1222",
    contactEmail: "contact@restfulmindwa.com"
  }

  private provider = {
    name: "Dmitry Tverskoy MSN, FNP-C",
    photo: "/assets/dmitry-headshot.jpg",
    desc: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt vitae semper quis lectus nulla at volutpat. Commodo viverra maecenas accumsan lacus vel facilisis volutpat.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis lectus nulla at volutpat diam. Nibh tellus molestie nunc non blandit massa enim.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra maecenas accumsan lacus vel facilisis volutpat est. Gravida quis blandit turpis cursus in hac habitasse platea dictumst."
    ],
    officeHours: {
      Sunday: "No Availability",
      Monday: "3:00 pm - 7:00 pm PT",
      Tuesday: "3:00 pm - 7:00 pm PT",
      Wednesday: "3:00 pm - 7:00 pm PT",
      Thursday: "3:00 pm - 7:00 pm PT",
      Friday: "No Availability",
      Saturday: "No Availability"
    },
    states: [
      {
        name: "Washington",
        address: "522 West Riverside Ave, STE 4830, Spokane, WA 99201",
        hours: {
          Sunday: "No Availability",
          Monday: "3:00 pm - 7:00 pm PT",
          Tuesday: "3:00 pm - 7:00 pm PT",
          Wednesday: "3:00 pm - 7:00 pm PT",
          Thursday: "3:00 pm - 7:00 pm PT",
          Friday: "No Availability",
          Saturday: "No Availability"
        }
      }
    ]
  }



  getProviderName(): string {
    return this.provider.name;
  }

  getProviderDesc(): string[] {
    return this.provider.desc;
  }

  getProviderImageLoc(): string {
    return this.provider.photo;
  }

  getCompanyName(): string {
    return this.company.name.full;
  }

  getCompanyShortName(): string {
    return this.company.name.short;
  }

  getPhoneNumber(): string {
    return this.company.phoneNumber;
  }

  getContactEmail(): string {
    return this.company.contactEmail;
  }

  getLocations(): Location[] {
    return this.provider.states;
  }

  getHours(): {[key: string]: string} {
    return this.provider.officeHours;
  }
}
