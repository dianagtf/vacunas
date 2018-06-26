import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService } from '../core/alert.service';
import { Users } from '../api-users/api-users.model';
import { ApiUsersService } from '../api-users/api-users.service';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'login.component.html',
    selector: 'app-login',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    users: Users[];
    loading = false;
    returnUrl: 'calendar';
    user: Users;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService,
        private apiUsersService: ApiUsersService) { }

    ngOnInit() {

        this.user = { id: 4, username: '', firstName: '', lastName: '', email: '', password: '', passwordRepeat: '',
                     numChildren: 0, childrenBirthday: ''};
    }
    login() {
        this.apiUsersService.login(this.user);
    }
    register() {
        this.router.navigate(['/', 'register']);
    }
}
