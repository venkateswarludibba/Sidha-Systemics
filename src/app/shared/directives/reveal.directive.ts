import { afterNextRender, Directive, ElementRef, inject, input, numberAttribute, OnDestroy, Renderer2 } from '@angular/core';
import { ANIMATION_CLASSES } from '../../core/animations/animation.constants';
import { scrollRevealOptions } from '../../core/animations/scroll.animations';

@Directive({ selector: '[appReveal]' })
export class RevealDirective implements OnDestroy {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly renderer = inject(Renderer2);
  private observer?: IntersectionObserver;
  readonly appReveal = input(0, { transform: numberAttribute });

  constructor() {
    this.renderer.addClass(this.element.nativeElement, ANIMATION_CLASSES.reveal);
    afterNextRender(() => this.observe());
  }

  private observe(): void {
    if (!('IntersectionObserver' in window)) { this.show(); return; }
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) { this.show(); this.observer?.disconnect(); }
    }, scrollRevealOptions);
    this.observer.observe(this.element.nativeElement);
  }

  private show(): void {
    const delay = Math.max(0, this.appReveal());
    this.renderer.setStyle(this.element.nativeElement, 'transition-delay', `${delay}ms`);
    this.renderer.addClass(this.element.nativeElement, ANIMATION_CLASSES.visible);
  }

  ngOnDestroy(): void { this.observer?.disconnect(); }
}
