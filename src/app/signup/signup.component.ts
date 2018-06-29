import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ApiUsersService } from '../api-users/api-users.service';

import { Users } from '../api-users/api-users.model';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'signup.component.html',
    selector: 'app-signup',
    styleUrls: ['./signup.component.css']
})

export class SignUpComponent implements OnInit {
    users: Users[];
    loading = false;
    updateUser: Users;
    creationUsers: Users;
    returnUrl: 'signup';
    updateChecked = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private apiUsersService: ApiUsersService) { }

    ngOnInit() {
        // reset login status
        this.creationUsers = { id: 4, username: '', firstName: '', lastName: '', email: '', password: '', numChildren: 0};
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    create() {
        this.apiUsersService.create(this.creationUsers);
    }
}
