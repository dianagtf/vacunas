import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService } from '../core/alert.service';
import { ApiUsersService } from '../api-users/api-users.service';

import { Users } from '../api-users/api-users.model';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'register.component.html',
    selector: 'app-register',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
    users: Users[];
    loading = false;
    updateUser: Users;
    creationUsers: Users;
    returnUrl: 'register';
    updateChecked = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private apiUsersService: ApiUsersService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        this.creationUsers = { id: 4, username: '', firstName: '', lastName: '', email: '', password: '', passwordRepeat: '',
                     numChildren: 0, childrenBirthday: ''};
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    create() {
        this.apiUsersService.create(this.creationUsers);
        this.router.navigate(['/', 'login']);
    }

    back() {
        this.router.navigate(['/', 'login']);
    }
}
