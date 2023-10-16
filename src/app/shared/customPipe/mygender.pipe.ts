import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mygender'
})
export class MygenderPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
