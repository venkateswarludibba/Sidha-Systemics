import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { ProductModules } from './product-modules/product-modules';
import { FeatureHighlights } from './feature-highlights/feature-highlights';
import { HomeSolutions } from './solutions/solutions';
import { Testimonials } from './testimonials/testimonials';
import { Faq, FaqItem } from '../../shared/components/faq/faq';
import { Cta } from '../../shared/components/cta/cta';

@Component({
  selector: 'app-home-page',
  imports: [Hero, ProductModules, FeatureHighlights, HomeSolutions, Testimonials, Faq, Cta],
  templateUrl: './home-page.html'
})
export default class HomePage {
  protected readonly faqs: FaqItem[] = [
    { question: 'What is Sidha Systemics?', answer: 'Sidha Systemics is a connected education ERP and portal ecosystem focused on making institutional operations clearer and easier to manage.' },
    { question: 'Is Sidha suitable for both schools and colleges?', answer: 'Yes. The foundation is designed for both, while workflows and implementation can reflect each institution’s needs.' },
    { question: 'Which features are available now?', answer: 'Core student information, attendance, academic planning, and role-based portals are available. Events and online assessments are clearly identified as upcoming.' },
    { question: 'How does onboarding work?', answer: 'We begin with discovery, configure the relevant workflows, support data preparation, and guide your team through rollout.' }
  ];
}
