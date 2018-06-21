import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService } from '../core/alert.service';
import { AuthenticationService } from '../core/authentication.service';
import { UserService } from '../user/user.service';

import { User } from '../user/user.model';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'register.component.html',
    selector: 'app-register',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
    user: User;
    loading = false;
    createUser: User;
    returnUrl: 'register';

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
        this.user = { id: 4, username: '', firstName: '', lastName: '', email: '', password: '', passwordRepeat: '' };
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    register() {
        this.loading = true;

        this.createUser = { id: 4, username: 'a', firstName: 'a' , lastName: 'a', email: '', password: 'a', passwordRepeat: 'a'};
        this.router.navigate(['/', 'children']);
        /*this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });*/
    }
    back() {
        this.router.navigate(['/', 'login']);
    }
}
