import { Component } from '@angular/core';
import { Button } from '../../shared/components/button/button';
@Component({ imports:[Button], template:'<section class="page-hero"><div class="container"><span class="eyebrow">404</span><h1>That page has moved out of view</h1><p>Let’s get you back to a useful place.</p><div class="actions"><app-button link="/" label="Return home" /></div></div></section>' })
export default class NotFoundPage {}
