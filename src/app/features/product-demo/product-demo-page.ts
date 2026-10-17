import { Component } from '@angular/core';
import { Button } from '../../shared/components/button/button';
import { RevealDirective } from '../../shared/directives/reveal.directive';
@Component({ imports:[Button,RevealDirective], templateUrl:'./product-demo-page.html', styleUrl:'./product-demo-page.scss' })
export default class ProductDemoPage {}
