import { Component } from '@angular/core';
import { Button } from '../../shared/components/button/button';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { Faq, FaqItem } from '../../shared/components/faq/faq';
@Component({ imports:[Button,RevealDirective,Faq], templateUrl:'./pricing-page.html', styleUrl:'./pricing-page.scss' })
export default class PricingPage { protected readonly faqs:FaqItem[]=[{question:'Why is pricing customized?',answer:'Institution size, selected capabilities, implementation scope, and support needs vary. A short discovery call lets us prepare a relevant proposal.'},{question:'Are upcoming modules included?',answer:'No. Proposals identify available capabilities clearly. Upcoming modules are discussed separately when they become available.'},{question:'Is onboarding included?',answer:'Your proposal will clearly outline discovery, configuration, training, and rollout support.'}]; }
