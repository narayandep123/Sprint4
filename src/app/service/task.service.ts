import { Injectable } from '@angular/core';
import { Task } from '../task';
import { FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private taskList: Task[] = [
    { id: 1,projectId:1, status:1, assignedToUser:2, detail: 'This is a test project', createdOn: new Date('08/31/1992')}
  ];
  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44332/';

  getTask() {
     this.http .get(this.BaseURI+'api/task');
    return this.taskList;
  }

  getTaskByID(id: number) {
    return this.http .get(this.BaseURI+'api/task?id=1');
  }

  addTask(project: Task) {
    project.id = new Date().getTime();
    return this.http.post(this.BaseURI + 'api/user', project);
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
