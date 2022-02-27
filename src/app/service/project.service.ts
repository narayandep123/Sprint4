import { Injectable } from '@angular/core';
import { Project } from '../project';
import { FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
private projectList: Project[] = [
    { id: 1, name: 'TestProject1', detail: 'This is a test project', createdOn: new Date('08/31/1992')}
  ];
  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44332/';

  getProjects() {
    this.http .get(this.BaseURI+'api/project');
    return this.projectList
  }

  getProjectByID(id: number) {
     this.http .get(this.BaseURI+'api/project?id=1');
    return this.projectList.find(x => x.id == id)
  }

  addProject(project: Project) {
    project.id = new Date().getTime();
    return this.http.post(this.BaseURI + 'api/user', project);
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
