import { KeyValue } from '@angular/common';

export class Utils {
  // Preserve original property sort order
  public static getOriginalOrderSortFunction<T, S>(): (a: KeyValue<T, S>, b: KeyValue<T, S>) => number {
    return (a: KeyValue<T,S>, b: KeyValue<T,S>): number => {
      return 0;
    };
  }
}
