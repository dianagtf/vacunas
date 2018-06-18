import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService } from '../core/alert.service';
import { AuthenticationService } from '../core/authentication.service';
import { User } from '../user/user.model';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from '@angular/material';

import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'login.component.html',
    selector: 'app-login',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    user: User;
    loading = false;
    returnUrl: 'calendar';

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        this.user = { id: 4, username: '', firstName: '', lastName: '', password: '' };

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        console.log('a');
        this.authenticationService.login(this.user.username)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                    console.log('b');
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                    console.log('c');
                });
    }
}
