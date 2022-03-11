import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  newTask = "";


  constructor(private tasksTaskService: TasksService) { }

  ngOnInit(): void {
  }

  add(){
    const task: Task ={name: this.newTask, createdDate: new Date().toLocaleString(), isDone: false};
    this.tasksTaskService.add(task);
    this.newTask = "";
  }

}
