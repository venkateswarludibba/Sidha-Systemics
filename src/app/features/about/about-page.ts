import { Component } from '@angular/core';
import { Cta } from '../../shared/components/cta/cta';
import { RevealDirective } from '../../shared/directives/reveal.directive';
@Component({ imports:[Cta,RevealDirective], templateUrl:'./about-page.html', styleUrl:'./about-page.scss' })
export default class AboutPage {}
