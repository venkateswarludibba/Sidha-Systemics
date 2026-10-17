import { Routes } from '@angular/router';
import { PublicLayout } from './layout/public-layout/public-layout';

export const routes: Routes = [{
  path: '', component: PublicLayout, children: [
    { path: '', title: 'Sidha Systemics | Education operations, made clear', loadComponent: () => import('./features/home/home-page') },
    { path: 'features', title: 'Product & Features | Sidha Systemics', loadComponent: () => import('./features/features/features-page') },
    { path: 'solutions/schools', title: 'Solutions for Schools | Sidha Systemics', data: { kind: 'schools' }, loadComponent: () => import('./features/solutions/solution-page') },
    { path: 'solutions/colleges', title: 'Solutions for Colleges | Sidha Systemics', data: { kind: 'colleges' }, loadComponent: () => import('./features/solutions/solution-page') },
    { path: 'pricing', title: 'Pricing | Sidha Systemics', loadComponent: () => import('./features/pricing/pricing-page') },
    { path: 'product-demo', title: 'Product Demo | Sidha Systemics', loadComponent: () => import('./features/product-demo/product-demo-page') },
    { path: 'about', title: 'About | Sidha Systemics', loadComponent: () => import('./features/about/about-page') },
    { path: 'contact', title: 'Contact Us | Sidha Systemics', data: { mode: 'contact' }, loadComponent: () => import('./features/contact/contact-page') },
    { path: 'book-demo', title: 'Book a Demo | Sidha Systemics', data: { mode: 'demo' }, loadComponent: () => import('./features/contact/contact-page') },
    { path: 'resources', title: 'Resources & FAQs | Sidha Systemics', loadComponent: () => import('./features/resources/resources-page') },
    { path: 'privacy', title: 'Privacy Policy | Sidha Systemics', data: { type: 'privacy' }, loadComponent: () => import('./features/legal/legal-page') },
    { path: 'terms', title: 'Terms of Service | Sidha Systemics', data: { type: 'terms' }, loadComponent: () => import('./features/legal/legal-page') },
    { path: '**', title: 'Page Not Found | Sidha Systemics', loadComponent: () => import('./features/not-found/not-found-page') }
  ]
}];
