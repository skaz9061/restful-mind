import { Injectable } from '@angular/core';

interface IConditions {
  anxiety: string;
  adhd: string;
  depression: string;
  insomnia: string;
  panic: string;
  ocd: string;
}

@Injectable({
  providedIn: 'root'
})
export class ExternalLinkService {
  constructor() { }

  private booking: string = "https://www.google.com";
  private conditions: IConditions = {
    anxiety: "https://psychiatry.org/patients-families/anxiety-disorders/what-are-anxiety-disorders",
    adhd: "https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd",
    depression: "https://psychiatry.org/patients-families/depression/what-is-depression",
    insomnia: "https://www.mayoclinic.org/diseases-conditions/insomnia/symptoms-causes/syc-20355167",
    panic: "https://www.nimh.nih.gov/health/statistics/panic-disorder",
    ocd: "https://psychiatry.org/patients-families/obsessive-compulsive-disorder/what-is-obsessive-compulsive-disorder"
  }

  getCondition(condition: string) {
    return this.conditions[condition as keyof IConditions];
  }

  getBooking() {
    return this.booking;
  }
}
