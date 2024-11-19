import { CommonModule } from '@angular/common';
import { Component, Input, computed, input } from '@angular/core';

@Component({
  selector: 'badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.component.html'
})
export class BadgeComponent {
  bg = input<string>("#e7f2f4");
  textColor = input<string>("#0e6775");

  currentStyles =computed(() => ({
    'background-color':  this.bg(),
    'color':  this.textColor(),
  }))
}

