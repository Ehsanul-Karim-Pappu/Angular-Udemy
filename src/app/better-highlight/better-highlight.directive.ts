import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = '#9ffffc';
  @Input('appBetterHighlight') highlightColor: string = '#bfff9f';
  @HostBinding('style.backgroundColor') backgroundColor!: string;

  constructor(private elref: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elref.nativeElement, 'background-color', '#9ffffc')
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elref.nativeElement, 'background-color', '#bfff9f')
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elref.nativeElement, 'background-color', '#9ffffc')
    this.backgroundColor = this.defaultColor;
  }

}
