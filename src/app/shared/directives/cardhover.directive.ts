import { Directive, HostListener, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector:"[cardhover]"
})
class CardHoverDirective {

    constructor(private el: ElementRef, private renderer: Renderer) {
       // renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');
    }

    @HostListener('mouseover') onMouseOver() { 
        let part = this.el.nativeElement.querySelector('.title') 
        this.renderer.setElementStyle(part, 'display', 'block'); 
      }


}