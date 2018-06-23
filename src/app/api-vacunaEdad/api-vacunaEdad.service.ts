import { Injectable } from '@angular/core';
import { HttpService } from '../core/http.service';
import { VacunaEdad } from './api-vacunaEdad.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ApiVacunaEdadService {
    static URI = '/vacunaedad';

    private readVacunaEdad: Subject<VacunaEdad> = new Subject();

    private updateVacunaEdad: Subject<VacunaEdad> = new Subject();

    private allVacunaEdad: Subject<VacunaEdad[]> = new Subject();

    constructor(private httpService: HttpService) { }

    getAllVacunaEdad(): Observable<VacunaEdad[]> {
        this.readAll();
        return this.allVacunaEdad.asObservable();
    }

    getUpdateVacuna(): Observable<VacunaEdad> {
        return this.updateVacunaEdad.asObservable();
    }

    prepareUpdate(id: number) {
        this.httpService.get(ApiVacunaEdadService.URI + '/' + id).subscribe(
            (vacunaEdadArray: VacunaEdad) => this.updateVacunaEdad.next(vacunaEdadArray),
            error => alert(error)
        );
    }

    getReadVacunaEdad(): Observable<VacunaEdad> {
        return this.readVacunaEdad.asObservable();
    }

    read(id: number) {
        this.httpService.get(ApiVacunaEdadService.URI + '/' + id).subscribe(
            (vacunaEdadValue: VacunaEdad) => this.readVacunaEdad.next(vacunaEdadValue),
            error => alert(error),
        );
    }


    private readAll() {
        this.httpService.get(ApiVacunaEdadService.URI).subscribe(
            (vacunaEdadArray: VacunaEdad[]) => this.allVacunaEdad.next(vacunaEdadArray),
            error => alert(error)
        );
    }

    delete(id: number) {
        this.httpService.delete(ApiVacunaEdadService.URI + '/' + id).subscribe(
            () => this.readAll(),
            error => alert(error)
        );
    }

    create(vacunaedad: VacunaEdad) {
        this.httpService.post(ApiVacunaEdadService.URI, vacunaedad).subscribe(
            () => this.readAll(),
            error => alert(error)
        );
    }

    update(vacunaedad: VacunaEdad) {
        this.httpService.put(ApiVacunaEdadService.URI + '/' + vacunaedad.id, vacunaedad).subscribe(
            () => this.readAll(),
            error => alert(error)
        );
    }
}

