import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private elref: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elref.nativeElement, 'background-color', '#9ffffc')
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = '#9ffffc';

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elref.nativeElement, 'background-color', '#bfff9f')
    this.backgroundColor = '#bfff9f';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elref.nativeElement, 'background-color', '#9ffffc')
    this.backgroundColor = '#9ffffc'
  }

}
