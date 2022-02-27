import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projectList: Project[] = [];
  first = 0;
  rows = 10;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    // Get Users from UserService
    this.projectList = this.projectService.getProjects();
  }

  //****************PrimeNG DataTable Pagination method Start*********************** */
  //***************Reference: https://primefaces.org/primeng/showcase/#/table/page********** */
  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.projectList ? this.first === (this.projectList.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.projectList ? this.first === 0 : true;
  }
  //****************PrimeNG DataTable Pagination Method End*********************** */

  // ********************User To Remove User from User List*************************/
  remove(id: number) {
    this.projectService.removeProject(id);
    this.projectList = this.projectService.getProjects();
  }

}
