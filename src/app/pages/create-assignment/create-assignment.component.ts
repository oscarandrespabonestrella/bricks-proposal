import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectComponent } from '../../components/multi-select/multi-select.component';

@Component({
  selector: 'app-create-assignment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MultiSelectComponent],
  templateUrl: './create-assignment.component.html',
  styleUrl: './create-assignment.component.css'
})
export class CreateAssignmentComponent {
  showAdvInfo = false;
  assigmentType = "For information";
  private readonly options: string[] = ['For information', 'For follow-up', 'For opinion'];
  private readonly recipients: {key: string, recipients: string[]}[] = [
    {
      key: "To",
      recipients: ["YUSEINOV Soner Bahtinur (EXPO - POLICY DEPT EXPO)","MEANEY Damian (EXPO - ASIA / AUSTRALIA)","PAPACHRISTOPOULOU Georgios (FINS - BUDGET UNIT)"]
    },
    {
      key: "Services",
      recipients: ["EXPO - DIR COMMITTEES","EXPO - DIR REGIONS","FINS - BUDGET UNIT"]
    }
  ];

  assignmentList: {type: string; recipients: {key: string, recipients: string[]}}[] = [];

  sendToControl: FormControl = new FormControl(false);

  toggleAdvInfo(){
    this.showAdvInfo =!this.showAdvInfo;
  }
  setAssignmentType(value: string){
    this.assigmentType = value;
  }

  addAssignment(){
    const randomIndex = Math.floor(Math.random() * this.options.length);
    const recipientIndex = this.sendToControl.value ? 1: 0;
    this.assignmentList.push({type: this.assigmentType, recipients: this.recipients[recipientIndex]});
  }
  delete(index: number){    
    this.assignmentList.splice(index,1)
  }
}
