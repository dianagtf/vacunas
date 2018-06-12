import { Injectable } from '@angular/core';
import { HttpService } from '../core/http.service';
import { Vacunas } from './api-vacunas.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ApiVacunasService {
    static URI = '/vacunas';

    private readVacuna: Subject<Vacunas> = new Subject();

    private updateVacuna: Subject<Vacunas> = new Subject();

    private allVacunas: Subject<Vacunas[]> = new Subject();

    constructor(private httpService: HttpService) { }

    getAllVacunas(): Observable<Vacunas[]> {
        this.readAll();
        return this.allVacunas.asObservable();
    }

    getUpdateVacuna(): Observable<Vacunas> {
        return this.updateVacuna.asObservable();
    }

    prepareUpdate(id: number) {
        this.httpService.get(ApiVacunasService.URI + '/' + id).subscribe(
            (vacunaValue: Vacunas) => this.updateVacuna.next(vacunaValue),
            error => alert(error)
        );
    }

    getReadVacuna(): Observable<Vacunas> {
        return this.readVacuna.asObservable();
    }

    read(id: number) {
        this.httpService.get(ApiVacunasService.URI + '/' + id).subscribe(
            (vacunaValue: Vacunas) => this.readVacuna.next(vacunaValue),
            error => alert(error),
        );
    }


    private readAll() {
        this.httpService.get(ApiVacunasService.URI).subscribe(
            (vacunasArray: Vacunas[]) => this.allVacunas.next(vacunasArray),
            error => alert(error)
        );
    }

    delete(id: number) {
        this.httpService.delete(ApiVacunasService.URI + '/' + id).subscribe(
            () => this.readAll(),
            error => alert(error)
        );
    }

    create(vacuna: Vacunas) {
        this.httpService.post(ApiVacunasService.URI, vacuna).subscribe(
            () => this.readAll(),
            error => alert(error)
        );
    }

    update(vacuna: Vacunas) {
        this.httpService.put(ApiVacunasService.URI + '/' + vacuna.id, vacuna).subscribe(
            () => this.readAll(),
            error => alert(error)
        );
    }
}

