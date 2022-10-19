import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversorPipe'
})
export class ConversorPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return "hola"+value;
  }

}
