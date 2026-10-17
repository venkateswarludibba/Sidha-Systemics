import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
@Component({ selector: 'app-public-layout', imports: [RouterOutlet, Header, Footer], template: '<a class="skip" href="#content">Skip to content</a><app-header /><main id="content"><router-outlet /></main><app-footer />', styles: ['.skip{position:fixed;z-index:100;top:-5rem;left:1rem;padding:.75rem 1rem;color:#fff;background:#10243e;border-radius:.5rem}.skip:focus{top:1rem}'] })
export class PublicLayout {}
