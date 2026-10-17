import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Button } from '../../shared/components/button/button';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { Cta } from '../../shared/components/cta/cta';

@Component({ imports: [NgFor, Button, RevealDirective, Cta], templateUrl: './features-page.html', styleUrl: './features-page.scss' })
export default class FeaturesPage {
  protected readonly groups = [
    { title: 'ERP Management', state: 'Available', text: 'A connected operational foundation for managing the essential academic and administrative workflows of your institution.', items: ['Unified institutional records', 'Role-aware operations', 'Central activity overview'] },
    { title: 'Admin Portal', state: 'Available', text: 'Give authorized teams a focused command center for day-to-day coordination, records, and institutional visibility.', items: ['Operational dashboard', 'User and role access', 'Structured administration'] },
    { title: 'Student Portal', state: 'Available', text: 'A clear, responsive space where learners can access the academic information and updates relevant to them.', items: ['Academic overview', 'Attendance visibility', 'Institutional updates'] },
    { title: 'Teacher Portal', state: 'Available', text: 'Help educators spend less time navigating systems and more time supporting learning.', items: ['Class workflows', 'Fast attendance capture', 'Academic planning'] },
    { title: 'Parent Portal', state: 'Available', text: 'Create a dependable connection between families and the student information their institution shares.', items: ['Student progress context', 'Attendance visibility', 'Important notices'] },
    { title: 'Events Management', state: 'Upcoming', text: 'A planned module for coordinating institutional calendars, activities, audiences, and event communication.', items: ['Shared event calendars', 'Activity coordination', 'Audience updates'] },
    { title: 'Online Assessments', state: 'Upcoming', text: 'Planned tools for creating, delivering, and reviewing structured digital assessments.', items: ['Assessment creation', 'Controlled delivery', 'Result summaries'] },
    { title: 'Student information', state: 'Available', text: 'Maintain structured learner profiles and the essential information your team uses every day.', items: ['Central learner records', 'Organized academic context', 'Role-aware access'] },
    { title: 'Attendance workflows', state: 'Available', text: 'Make daily capture straightforward while giving authorized teams a clearer view of patterns.', items: ['Fast daily capture', 'Class-level summaries', 'Attendance trends'] },
    { title: 'Academic planning', state: 'Available', text: 'Bring classes, schedules, and academic coordination into a more consistent workflow.', items: ['Class organization', 'Timetable visibility', 'Activity planning'] },
    { title: 'Fee management', state: 'Upcoming', text: 'A planned module to support transparent fee structures, collection tracking, and balances.', items: ['Fee structures', 'Collection tracking', 'Balance visibility'] },
    { title: 'Communication hub', state: 'Upcoming', text: 'Planned tools for focused notices and dependable institution-wide communication.', items: ['Targeted updates', 'Notice history', 'Audience controls'] },
    { title: 'Insight and reporting', state: 'Upcoming', text: 'Planned reporting experiences that turn everyday activity into practical insight.', items: ['Operational summaries', 'Trend views', 'Exportable reports'] }
  ];
}
