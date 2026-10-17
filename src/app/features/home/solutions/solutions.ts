import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
@Component({ selector: 'app-home-solutions', imports: [RouterLink, RevealDirective], templateUrl: './solutions.html', styleUrl: './solutions.scss' })
export class HomeSolutions {}
