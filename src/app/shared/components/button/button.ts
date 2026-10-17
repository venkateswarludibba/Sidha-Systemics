import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [RouterLink],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  readonly link = input.required<string>();
  readonly variant = input<'primary' | 'secondary' | 'ghost'>('primary');
  readonly label = input.required<string>();
}
