import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  texto = "como es como seria"
  check = true
  palabra = "curso"

  constructor() { }

  ngOnInit(): void {
  }

}
