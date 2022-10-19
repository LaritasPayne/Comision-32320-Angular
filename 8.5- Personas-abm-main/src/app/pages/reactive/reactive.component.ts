import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
})
export class ReactiveComponent implements OnInit {

  forma:FormGroup;

  constructor(private fb:FormBuilder) {
      this.crearFormulario();
   }

  ngOnInit(): void {
  }

  crearFormulario(){
    this.forma=this.fb.group({
      nombre:   ['', [Validators.required,Validators.minLength(4)]],
      apellido: ['cardona',[Validators.required,Validators.minLength(4)]],
      correo:   ['ac@gmail.com',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
      direccion:this.fb.group({
        carrera:['8c',Validators.required],
        numero:['57c',Validators.required],
        barrio:['villa cafe',Validators.required]
      })
    });
  }

  get nombreNoValido(){
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched
  }
  get apellidoNoValido(){
    return this.forma.get('apellido').invalid && this.forma.get('apellido').touched
  }
  get correoNoValido(){
    return this.forma.get('correo').invalid && this.forma.get('correo').touched
  }
  get carreraNoValido(){
    return this.forma.get('direccion.carrera').invalid && this.forma.get('direccion.carrera').touched
  }
  get numeroNoValido(){
    return this.forma.get('direccion.numero').invalid && this.forma.get('direccion.numero').touched
  }
  get barrioNoValido(){
    return this.forma.get('direccion.barrio').invalid && this.forma.get('direccion.barrio').touched
  }

  guardar(){
    if(this.forma.invalid) return Object.values(this.forma.controls).forEach(control=>{
      control.markAsTouched();
    })
    console.log(this.forma);

  }

}
