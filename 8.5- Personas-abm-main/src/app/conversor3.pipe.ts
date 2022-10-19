import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversor3'
})
export class Conversor3Pipe implements PipeTransform {

  transform(value: unknown, args:string): unknown {
    let palabra = "pipe"
    switch (args) {
      case "custom":
        palabra = "custom"
        break;
      case "curso":
        palabra = "curso"
        break;
      default:
        palabra = "default"
    }
    return palabra;
  }

}
