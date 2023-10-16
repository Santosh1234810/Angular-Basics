import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqaure'
})
export class SqaurePipe implements PipeTransform {

  transform(value: any) {
    return value*value;
  }
}
