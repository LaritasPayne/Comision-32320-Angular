import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input() colorResaldato:string

  constructor(private elRef: ElementRef) { 
    elRef.nativeElement.style.backgroundColor='yellow'
  }

  ngOnInit(): void {
    this.resaltar()
  }
  resaltar() {
    this.elRef.nativeElement.style.backgroundColor=this.colorResaldato ?? 'red'
  }
}
