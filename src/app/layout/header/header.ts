import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Button } from '../../shared/components/button/button';
import { Logo } from '../../shared/components/logo/logo';

@Component({ selector: 'app-header', imports: [RouterLink, RouterLinkActive, Button, Logo], templateUrl: './header.html', styleUrl: './header.scss' })
export class Header {
  protected readonly open = signal(false);
  protected toggle(): void { this.open.update(value => !value); }
  protected close(): void { this.open.set(false); }
  @HostListener('document:keydown.escape') protected escape(): void { this.close(); }
}
