import { Injectable } from '@angular/core';
import { Project } from '../project';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
private projectList: Project[] = [
    { id: 1, name: 'TestProject1', detail: 'This is a test project', createdOn: new Date('08/31/1992')}
  ];
  constructor() { }

  getProjects() {
    return this.projectList
  }

  getProjectByID(id: number) {
    return this.projectList.find(x => x.id == id)
  }

  addProject(project: Project) {
    project.id = new Date().getTime();
    this.projectList.push(project);
  }

  updateProject(project: Project) {
    const userIndex = this.projectList.findIndex(x => x.id == project.id);
    if (userIndex != null && userIndex != undefined) {
      this.projectList[userIndex] = project;
    }
  }

  removeProject(id: number) {
    this.projectList = this.projectList.filter(x => x.id != id);
  }
}
