import { Pipe, PipeTransform } from '@angular/core';
import {Hours} from "./hours";
import {IHours} from "./i-hours";

@Pipe({
  name: 'hoursTransform',
  pure: true
})
export class HoursTransformPipe implements PipeTransform {
  transform(value: IHours): {[key: string]: string} {
    let hours = new Hours(value);
    return hours.getHours();
  }
}
