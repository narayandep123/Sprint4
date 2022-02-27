import { Injectable } from '@angular/core';
import { User } from '../user';
import { FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userList: User[] = [
    { id: 1, firstName: 'Ankit Sahu', lastName :'lohra,', email: 'deep@gmail.com', password: '8978786933', }
  ];

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44332/';

  getUsers() {
   // return this.userList
   return this.http .get(this.BaseURI+'api/user');
  }

  getUsersByID(id: number) {
    return this.http .get(this.BaseURI+'api/user?id=1');
  }

  addUser(user: User) {
    user.id = new Date().getTime();
    return this.http.post(this.BaseURI + 'api/user', user);
  }

  updateUser(user: User) {
    const userIndex = this.userList.findIndex(x => x.id == user.id);
    if (userIndex != null && userIndex != undefined) {
      this.userList[userIndex] = user;
    }
  }

  removeUser(id: number) {
    this.userList = this.userList.filter(x => x.id != id);
  }

}
