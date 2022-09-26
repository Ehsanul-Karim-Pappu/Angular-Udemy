import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{

  constructor(private elementRf: ElementRef) {  }

  ngOnInit() {
    this.elementRf.nativeElement.style.backgroundColor = '#ffbb00';
  }

}
