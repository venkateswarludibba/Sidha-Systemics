import { Component, ElementRef, HostListener, signal, viewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Button } from '../../shared/components/button/button';
import { Logo } from '../../shared/components/logo/logo';

@Component({ selector: 'app-header', imports: [RouterLink, RouterLinkActive, Button, Logo], templateUrl: './header.html', styleUrl: './header.scss' })
export class Header {
  protected readonly open = signal(false);
  private readonly navigation = viewChild<ElementRef<HTMLElement>>('navigation');
  private readonly menuButton = viewChild<ElementRef<HTMLButtonElement>>('menuButton');

  protected toggle(): void { this.open.update(value => !value); }
  protected close(): void { this.open.set(false); }

  @HostListener('document:keydown.escape')
  protected escape(): void { this.close(); }

  @HostListener('document:pointerdown', ['$event'])
  protected closeWhenClickingOutside(event: PointerEvent): void {
    if (!this.open()) return;

    const target = event.target;
    if (!(target instanceof Node)) return;

    const navigation = this.navigation()?.nativeElement;
    const menuButton = this.menuButton()?.nativeElement;

    if (!navigation?.contains(target) && !menuButton?.contains(target)) {
      this.close();
    }
  }
}
