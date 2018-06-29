import { Component, OnInit } from '@angular/core';
import { Users } from '../api-users/api-users.model';
import { ApiUsersService } from '../api-users/api-users.service';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'signin.component.html',
    selector: 'app-signin',
    styleUrls: ['./signin.component.css']
})

export class SignInComponent implements OnInit {
    users: Users[];
    loading = false;
    returnUrl: 'calendar';
    user: Users;

    constructor(
        private apiUsersService: ApiUsersService) { }

    ngOnInit() {

        this.user = { id: 4, username: '', firstName: '', lastName: '', email: '', password: '', numChildren: 0};
    }
    login() {
        this.apiUsersService.login(this.user);
    }
}
