import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-assignment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-assignment.component.html',
  styleUrl: './create-assignment.component.css'
})
export class CreateAssignmentComponent {
  showAdvInfo = false;
  assigmentType = "forInfo";
  private readonly options: string[] = ['For information', 'For follow-up', 'For opinion'];

  assignmentList: string[] = [];

  toggleAdvInfo(){
    this.showAdvInfo =!this.showAdvInfo;
  }
  setAssignmentType(value: string){
    this.assigmentType = value;
  }

  addAssignment(){
    const randomIndex = Math.floor(Math.random() * this.options.length);
    this.assignmentList.push(this.options[randomIndex]);
  }
  delete(index: number){    
    this.assignmentList.splice(index,1)
  }
}
