import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): string {
    let result = '';
    const lenght = value.length;
    for (let i = 0 ; i <= lenght ; i++) {
      result += value.charAt(lenght-(i+1));
    }
    return result;
  }

}
