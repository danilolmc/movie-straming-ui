import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appToggleFilmCard]'
})
export class ToggleFilmCardDirective {

  @Input() movieCard !: ElementRef<HTMLDivElement>;

  constructor(private elementRef : ElementRef, private render: Renderer2) { }

}
