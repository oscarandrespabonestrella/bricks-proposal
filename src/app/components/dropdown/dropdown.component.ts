import {
  Component,
  Output,
  TemplateRef,
  ViewChild,
  EventEmitter,
} from '@angular/core';
import { DropdownPanel } from './dropdown-panel';
import { OverlayModule } from '@angular/cdk/overlay';

@Component({
  selector: 'my-dropdown',
  standalone: true,
  imports: [OverlayModule],
  templateUrl: './dropdown.component.html',
  styles:`
  .dropdown-content {
    width: 14rem;
    padding: 0.5rem 0;
    background-color: white;
    border-radius: 6px;
    box-shadow: 0 10px 20px rgba(64, 64, 64, 0.15);
  }

  .dropdown-item {
    padding: 0.5rem 1rem;
    font-family: inherit;
    background-color: white;
    border: none;
    cursor: pointer;
    outline: none;
  }
  
  .dropdown-item:hover {
    background-color: #f3f4f5;
  }
  
  
  `,
})
export class DropdownComponent implements DropdownPanel {
  @ViewChild(TemplateRef) templateRef!: TemplateRef<any>;
  @Output() closed = new EventEmitter<void>();

  constructor() {}
}
