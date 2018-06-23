import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpService } from '../core/http.service';
import { Users } from './api-users.model';
import { ApiUsersService } from './api-users.service';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api-users',
  templateUrl: './api-users.component.html'
})
export class ApiUsersComponent implements OnInit {
  users: Users[];
  updateChecked = false;
  updateUser: Users;
  creationUsers: Users;

  errorMessage = '';
  displayedColumns = [
    'id',
    'username',
    'firstName',
    'lastName',
  ];

  constructor(private httpService: HttpService, private apiUsersService: ApiUsersService) {
   }

  ngOnInit(): void {

    this.creationUsers = { id: 4, username: '', firstName: '', lastName: '', email: '', password: '',
                        passwordRepeat: '', numChildren: 0, childrenBirthday: ''};
    this.creationUsers.id = 0;

    this.apiUsersService.getAllUsers().subscribe((users) => {
      this.users = users;
    }, error => {
      this.errorMessage = error;
    });

    this.apiUsersService.getUpdateUser().subscribe(user => {
      this.updateUser = user;
      this.updateChecked = true;
    });

    this.apiUsersService.getReadUser().subscribe(users => alert(users.id + ':' + users.username + ',' + users.firstName));
  }

  read(id: number) {
    this.apiUsersService.read(id);
  }

  delete(id: number) {
    this.apiUsersService.delete(id);
  }

  prepareUpdate(id: number) {
    this.apiUsersService.prepareUpdate(id);
  }

  save() {
    this.updateChecked = false;
    this.apiUsersService.update(this.updateUser);
  }

  create() {
    this.apiUsersService.create(this.creationUsers);
  }

  cancel() {
    this.updateChecked = false;
  }
}
