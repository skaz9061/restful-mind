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
      "My name is Dmitry, and I am passionate about helping you achieve a happier, more joyful life with a compassionate, client-focused approach. I have been practicing medicine for 10 years, treating thousands of patients specializing in emergency medicine, substance abuse treatment, and of course mental health. ",
      "Whether this is your first journey into mental health or if you have worked with a psychiatric care provider before, I look forward to helping you pursue a more enriching and fulfilling life."
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
