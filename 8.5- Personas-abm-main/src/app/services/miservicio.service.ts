import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MiservicioService {

  constructor(
    private _http:HttpClient
  ) { }
  
  retornar1() {
    return [
      {
        nombre: 'camilo',
        apellido:'cardona'
      },
      {
        nombre: 'cardona',
        apellido:'camilo'
      },
      {
        nombre: 'andres',
        apellido:'londoño'
      },
    ]
  }
}
