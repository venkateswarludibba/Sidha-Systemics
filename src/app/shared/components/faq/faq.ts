import { Component, input } from '@angular/core';
import { NgFor } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';
export interface FaqItem { question: string; answer: string; }
@Component({ selector: 'app-faq', imports: [NgFor, RevealDirective], templateUrl: './faq.html', styleUrl: './faq.scss' })
export class Faq { readonly items = input.required<readonly FaqItem[]>(); }
