import { Component, OnInit, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BadgeComponent } from '../../components/badge/badge.component';
import data from "./task-list.json";
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({  
  standalone: true,
  imports: [BadgeComponent, ReactiveFormsModule],
  providers:[],
  
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.css'
})
export class TaskDetailComponent implements OnInit{
  showTaskList = false;
  taskList = (data.tasklist as unknown as Array<{[key:string]: unknown}>).slice(0, 20)
  .map(x => ({name: x['name'], type: x['type']}));

  searchControlInput: FormControl = new FormControl("");
  $searchInput = toSignal(this.searchControlInput.valueChanges, {initialValue: ""})

  $filteredTask = computed(() => this.taskList.filter(x => 
    JSON.stringify(x).toLowerCase().includes(this.$searchInput().toLowerCase())
    ))


  toggleTasklist(){
    this.showTaskList =!this.showTaskList;
  }

  ngOnInit(): void {
   console.log(data)
  }
}