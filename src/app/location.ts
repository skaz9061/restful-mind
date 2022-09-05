import {Hours} from "./hours";
import {IHours} from "./i-hours";

export interface Location {
  name: string;
  address: string;
  hours: IHours;
}


