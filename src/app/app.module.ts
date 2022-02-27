import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { HomeComponent } from './home/home.component';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './service/user.service';
import { TaskListComponent } from './task-list/task-list.component';
import { ProjectListComponent } from './project-list/project-list.component';
import {ProjectService} from './service/project.service';
import {TaskService} from './service/task.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AddUserComponent,
    UserListComponent,
    HomeComponent,
    TaskListComponent,
    ProjectListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // BrowserAnimations Modules 
    BrowserAnimationsModule,

    //  PrimeNG  Modules
    ButtonModule,
    TableModule,
    CalendarModule,
    SliderModule,

    //  Angular Form Modules
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService, ProjectService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
