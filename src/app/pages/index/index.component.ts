import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IndexButtonComponent } from '../../components/index-button/index-button.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule, IndexButtonComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}
