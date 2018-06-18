import { Injectable } from '@angular/core';
import { HttpService } from '../core/http.service';
import { Users } from './api-users.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ApiUsersService {
    static URI = '/users';

    private readUser: Subject<Users> = new Subject();

    private updateUser: Subject<Users> = new Subject();

    private allUsers: Subject<Users[]> = new Subject();

    constructor(private httpService: HttpService) { }

    getAllUsers(): Observable<Users[]> {
        this.readAll();
        return this.allUsers.asObservable();
    }

    getUpdateUser(): Observable<Users> {
        return this.updateUser.asObservable();
    }

    prepareUpdate(id: number) {
        this.httpService.get(ApiUsersService.URI + '/' + id).subscribe(
            (userValue: Users) => this.updateUser.next(userValue),
            error => alert(error)
        );
    }

    getReadUser(): Observable<Users> {
        return this.readUser.asObservable();
    }

    read(id: number) {
        this.httpService.get(ApiUsersService.URI + '/' + id).subscribe(
            (userValue: Users) => this.readUser.next(userValue),
            error => alert(error),
        );
    }


    private readAll() {
        this.httpService.get(ApiUsersService.URI).subscribe(
            (usersArray: Users[]) => this.allUsers.next(usersArray),
            error => alert(error)
        );
    }

    delete(id: number) {
        this.httpService.delete(ApiUsersService.URI + '/' + id).subscribe(
            () => this.readAll(),
            error => alert(error)
        );
    }

    create(user: Users) {
        this.httpService.post(ApiUsersService.URI, user).subscribe(
            () => this.readAll(),
            error => alert(error)
        );
    }

    update(user: Users) {
        this.httpService.put(ApiUsersService.URI + '/' + user.id, user).subscribe(
            () => this.readAll(),
            error => alert(error)
        );
    }
}

