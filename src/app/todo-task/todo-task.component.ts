import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  tasksList: Array<Task> = [];

  constructor(private tasksTaskService: TasksService) {
    this.tasksTaskService.getTaskListObs().subscribe((tasks: Array<Task>) => {
      this.tasksList = tasks.filter(task => task.isDone == false);
    });
   }

  ngOnInit(): void {
  }

  remove(task: Task){
    this.tasksTaskService.remove(task);
  }
  done(task: Task){
    this.tasksTaskService.done(task);
  }
  getColor(){
    let ile = this.tasksList.length
    if(ile>=5)
      return "red"
    else
      return "green"
    // return  >= 5 ? 'red' : 'green';
  }
}
