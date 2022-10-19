import { Component, OnInit } from '@angular/core';
import { MiservicioService } from 'src/app/services/miservicio.service';

@Component({
  selector: 'app-servicios-page',
  templateUrl: './servicios-page.component.html',
  styleUrls: ['./servicios-page.component.css']
})
export class ServiciosPageComponent implements OnInit {

  personas:any[]=[]

  constructor(
    private _service:MiservicioService
  ) { }

  ngOnInit(): void {
    this.personas =  this._service.retornar1()
  }

}
