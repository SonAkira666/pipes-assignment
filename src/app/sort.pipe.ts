import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any[]): any[] {
    if (value.length === 0) return value;
    let resultArray = value.slice();
    resultArray.sort((a, b): number => {
      if (a.name < b.name) return -1;
      else if (a.name > b.name) return 1;
      else return 0;
    });
    return resultArray;
  }

}
