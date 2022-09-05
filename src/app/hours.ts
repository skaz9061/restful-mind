import {IHours} from "./i-hours";

export class Hours implements IHours{
  Sunday: string = "";
  Monday: string = "";
  Tuesday: string = "";
  Wednesday: string = "";
  Thursday: string = "";
  Friday: string = "";
  Saturday: string = "";

  constructor(hours: IHours) {
    this.Sunday = hours.Sunday;
    this.Monday = hours.Monday;
    this.Tuesday = hours.Tuesday;
    this.Wednesday = hours.Wednesday;
    this.Thursday = hours.Thursday;
    this.Friday = hours.Friday;
    this.Saturday = hours.Saturday;
  }

  public getHours(): {[key: string]: string} {
    return {
      "Sunday": this.Sunday,
      "Monday": this.Monday,
      "Tuesday": this.Tuesday,
      "Wednesday": this.Wednesday,
      "Thursday": this.Thursday,
      "Friday": this.Friday,
      "Saturday": this.Saturday
    }
  }
}
