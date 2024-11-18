import { Component, Input } from '@angular/core';

@Component({
  selector: 'index-button',
  standalone: true,
  imports: [],
  template: `
  <button class="px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
    <ng-content></ng-content>
  </button>
  `,
  styles: ``
})
export class IndexButtonComponent {
  @Input() title!: string;
}
