import { Injectable } from '@angular/core';
import { HttpService } from '../core/http.service';
import { VacunaUser } from './api-vacunaUser.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ApiVacunaUserService {
    static URI = '/vacunauser';

    private readVacunaUser: Subject<VacunaUser> = new Subject();

    private updateVacunaUser: Subject<VacunaUser> = new Subject();

    private allVacunaUser: Subject<VacunaUser[]> = new Subject();

    constructor(private httpService: HttpService) { }

    getAllVacunaUser(): Observable<VacunaUser[]> {
        this.readAll();
        return this.allVacunaUser.asObservable();
    }

    getUpdateVacuna(): Observable<VacunaUser> {
        return this.updateVacunaUser.asObservable();
    }

    prepareUpdate(id: number) {
        this.httpService.get(ApiVacunaUserService.URI + '/' + id).subscribe(
            (vacunaUserArray: VacunaUser) => this.updateVacunaUser.next(vacunaUserArray),
            error => alert(error)
        );
    }

    getReadVacunaUser(): Observable<VacunaUser> {
        return this.readVacunaUser.asObservable();
    }

    read(id: number) {
        this.httpService.get(ApiVacunaUserService.URI + '/' + id).subscribe(
            (vacunaUserValue: VacunaUser) => this.readVacunaUser.next(vacunaUserValue),
            error => alert(error),
        );
    }


    private readAll() {
        this.httpService.get(ApiVacunaUserService.URI).subscribe(
            (vacunaUserArray: VacunaUser[]) => this.allVacunaUser.next(vacunaUserArray),
            error => alert(error)
        );
    }

    delete(id: number) {
        this.httpService.delete(ApiVacunaUserService.URI + '/' + id).subscribe(
            () => this.readAll(),
            error => alert(error)
        );
    }

    create(vacunauser: VacunaUser) {
        this.httpService.post(ApiVacunaUserService.URI, vacunauser).subscribe(
            () => this.readAll(),
            error => alert(error)
        );
    }

    update(vacunauser: VacunaUser) {
        this.httpService.put(ApiVacunaUserService.URI + '/' + vacunauser.id, vacunauser).subscribe(
            () => this.readAll(),
            error => alert(error)
        );
    }
}

