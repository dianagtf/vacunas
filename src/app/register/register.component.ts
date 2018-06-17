import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from '../core/alert.service';
import { UserService } from '../user/user.service';

import { User } from '../user/user.model';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;
    createUser: User;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    register() {
        this.loading = true;

        this.createUser = { id: 4, username: 'a', password: 'a', firstName: 'a' , lastName: 'a' };
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
}
