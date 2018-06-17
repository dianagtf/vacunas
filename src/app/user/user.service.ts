import { Injectable } from '@angular/core';
import { HttpService } from '../core/http.service';
import { User } from './user.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserService {
    static URI = '/users';

    private readUser: Subject<User> = new Subject();

    private updateUser: Subject<User> = new Subject();

    private allUsers: Subject<User[]> = new Subject();

    constructor(private httpService: HttpService) { }

    getAllUsers(): Observable<User[]> {
        this.readAll();
        return this.allUsers.asObservable();
    }

    getUpdateUser(): Observable<User> {
        return this.updateUser.asObservable();
    }

    prepareUpdate(id: number) {
        this.httpService.get(UserService.URI + '/' + id).subscribe(
            (userValue: User) => this.updateUser.next(userValue),
            error => alert(error)
        );
    }

    getReadUser(): Observable<User> {
        return this.readUser.asObservable();
    }

    read(id: number) {
        this.httpService.get(UserService.URI + '/' + id).subscribe(
            (userValue: User) => this.readUser.next(userValue),
            error => alert(error),
        );
    }


    private readAll() {
        this.httpService.get(UserService.URI).subscribe(
            (usersArray: User[]) => this.allUsers.next(usersArray),
            error => alert(error)
        );
    }

    delete(id: number) {
        this.httpService.delete(UserService.URI + '/' + id).subscribe(
            () => this.readAll(),
            error => alert(error)
        );
    }

    create(user: User) {
        this.httpService.post(UserService.URI, user).subscribe(
            () => this.readAll(),
            error => alert(error)
        );
    }

    update(user: User) {
        this.httpService.put(UserService.URI + '/' + user.id, user).subscribe(
            () => this.readAll(),
            error => alert(error)
        );
    }
}

