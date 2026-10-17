import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({ templateUrl:'./legal-page.html' })
export default class LegalPage { private readonly route=inject(ActivatedRoute); protected readonly type=this.route.snapshot.data['type'] as 'privacy'|'terms'; protected readonly privacy=this.type==='privacy'; }
