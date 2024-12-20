import { Component, Input } from '@angular/core';

@Component({
  selector: 'index-button',
  standalone: true,
  imports: [],
  template: `
  
  <button
  class="text-xl w-36 h-full rounded bg-white text-[#3c77bd] relative overflow-hidden group z-10 hover:text-white duration-1000 py-5 border border-[#3c77bd]"
>
  <span
    class="absolute bg-[#6db6ff] w-40 h-44 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"
  ></span>
  <span
    class="absolute bg-[#3c77bd] w-40 h-44 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"
  ></span>
  <ng-content></ng-content>
</button>

  `,
  styles: ``
})
export class IndexButtonComponent {
  @Input() title!: string;
}
