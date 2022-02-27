import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  
  taskList: Task[] = [];
  first = 0;
  rows = 10;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    // Get Users from UserService
    this.taskList = this.taskService.getTask();
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
    return this.taskList ? this.first === (this.taskList.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.taskList ? this.first === 0 : true;
  }
  //****************PrimeNG DataTable Pagination Method End*********************** */

  // ********************User To Remove User from User List*************************/
  remove(id: number) {
    this.taskService.removeTask(id);
    this.taskList = this.taskService.getTask();
  }
}
