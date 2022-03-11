import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../models/task'

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasksListObs = new BehaviorSubject<Array<Task>>([]);

  constructor() {
    const tasksList = [
      { name: "Sprzątanie kuwety", createdDate: new Date().toLocaleString(), isDone: false },
      { name: "Mycie naczyń", createdDate: new Date().toLocaleString(), isDone: false },
      { name: "Nauka angulara", createdDate: new Date().toLocaleString(), isDone: false },
      { name: "Wyjście z psem", createdDate: new Date().toLocaleString(), isDone: false },
      { name: "Wyjście z psem", createdDate: new Date().toLocaleString(), endDate: new Date().toLocaleString(), isDone: true }
    ];
    this.tasksListObs.next(tasksList);
  }

  add(task: Task) {
    if (task.name != "") {
      const list = this.tasksListObs.getValue();
      list.push(task);
      this.tasksListObs.next(list);
    }
  }
  remove(task: Task) {
    const list = this.tasksListObs.getValue().filter(e => e !== task);
    this.tasksListObs.next(list);
  }
  done(task: Task) {
    task.endDate = new Date().toLocaleDateString();
    task.isDone = true;
    const list = this.tasksListObs.getValue();
    this.tasksListObs.next(list);
  }

  getTaskListObs(): Observable<Array<Task>> {
    return this.tasksListObs.asObservable();
  }
}
