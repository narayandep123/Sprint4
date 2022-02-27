import { Injectable } from '@angular/core';
import { Task } from '../task';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private taskList: Task[] = [
    { id: 1,projectId:1, status:1, assignedToUser:2, detail: 'This is a test project', createdOn: new Date('08/31/1992')}
  ];
  constructor() { }

  getTask() {
    return this.taskList
  }

  getTaskByID(id: number) {
    return this.taskList.find(x => x.id == id)
  }

  addTask(project: Task) {
    project.id = new Date().getTime();
    this.taskList.push(project);
  }

  updateTask(project: Task) {
    const userIndex = this.taskList.findIndex(x => x.id == project.id);
    if (userIndex != null && userIndex != undefined) {
      this.taskList[userIndex] = project;
    }
  }

  removeTask(id: number) {
    this.taskList = this.taskList.filter(x => x.id != id);
  }
}
