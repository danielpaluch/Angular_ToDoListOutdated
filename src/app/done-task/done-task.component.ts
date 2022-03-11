import { Component, Input, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {

  tasksDone: Array<Task> = [];

  constructor(private tasksTaskService: TasksService) { 
    this.tasksTaskService.getTaskListObs().subscribe((tasks: Array<Task>) => {
      this.tasksDone = tasks.filter(task => task.isDone===true);
    });
  }

  ngOnInit(): void {
  }

}
