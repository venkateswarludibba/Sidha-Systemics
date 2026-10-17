import { Component } from '@angular/core';
import { Button } from '../button/button';
import { RevealDirective } from '../../directives/reveal.directive';
@Component({ selector: 'app-cta', imports: [Button, RevealDirective], templateUrl: './cta.html', styleUrl: './cta.scss' })
export class Cta {}
