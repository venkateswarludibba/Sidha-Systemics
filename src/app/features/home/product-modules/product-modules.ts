import { Component } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../../shared/directives/reveal.directive';

interface ProductModule {
  readonly code: string;
  readonly title: string;
  readonly description: string;
  readonly status: 'Available' | 'Upcoming';
  readonly tone: string;
}

@Component({
  selector: 'app-product-modules',
  imports: [NgFor, NgClass, RouterLink, RevealDirective],
  templateUrl: './product-modules.html',
  styleUrl: './product-modules.scss'
})
export class ProductModules {
  protected readonly modules: ProductModule[] = [
    { code: 'EV', title: 'Events Management', description: 'Plan calendars, coordinate activities, and keep your community informed.', status: 'Upcoming', tone: 'violet' },
    { code: 'OA', title: 'Online Assessments', description: 'Create, deliver, and review structured digital assessments.', status: 'Upcoming', tone: 'coral' },
    { code: 'AD', title: 'Admin Portal', description: 'A clear command center for institutional operations and oversight.', status: 'Available', tone: 'blue' },
    { code: 'ST', title: 'Student Portal', description: 'Give learners one focused place for academics and updates.', status: 'Available', tone: 'cyan' },
    { code: 'TC', title: 'Teacher Portal', description: 'Simplify classroom workflows, attendance, and academic planning.', status: 'Available', tone: 'green' },
    { code: 'PR', title: 'Parent Portal', description: 'Keep families connected to meaningful student information.', status: 'Available', tone: 'amber' }
  ];
}
