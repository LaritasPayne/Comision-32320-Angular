import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversor2'
})
export class Conversor2Pipe implements PipeTransform {

  transform(value: unknown,val1:string,val2:string, ...args: unknown[]): unknown {
    return value ? val1:val2;
  }

}
