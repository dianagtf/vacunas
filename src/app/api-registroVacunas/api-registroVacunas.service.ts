import { Injectable } from '@angular/core';
import { HttpService } from '../core/http.service';
import { ApiRegistroVacunas } from './api-registroVacunas.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ApiRegistroVacunasService {
    static URI = '/vacunaedad';

    private readVacunaEdad: Subject<ApiRegistroVacunas> = new Subject();

    private updateRegistroVacunas: Subject<ApiRegistroVacunas> = new Subject();

    private allVacunaEdad: Subject<ApiRegistroVacunas[]> = new Subject();

    constructor(private httpService: HttpService) { }

    getAllVacunaEdad(): Observable<ApiRegistroVacunas[]> {
        this.readAll();
        return this.allVacunaEdad.asObservable();
    }

    getUpdateVacuna(): Observable<ApiRegistroVacunas> {
        return this.updateRegistroVacunas.asObservable();
    }

    prepareUpdate(id: number) {
        this.httpService.get(ApiRegistroVacunasService.URI + '/' + id).subscribe(
            (vacunaEdadArray: ApiRegistroVacunas) => this.updateRegistroVacunas.next(vacunaEdadArray),
            error => alert(error)
        );
    }

    getReadVacunaEdad(): Observable<ApiRegistroVacunas> {
        return this.readVacunaEdad.asObservable();
    }

    read(id: number) {
        this.httpService.get(ApiRegistroVacunasService.URI + '/' + id).subscribe(
            (vacunaEdadValue: ApiRegistroVacunas) => this.readVacunaEdad.next(vacunaEdadValue),
            error => alert(error),
        );
    }


    private readAll() {
        this.httpService.get(ApiRegistroVacunasService.URI).subscribe(
            (vacunaEdadArray: ApiRegistroVacunas[]) => this.allVacunaEdad.next(vacunaEdadArray),
            error => alert(error)
        );
    }

    delete(id: number) {
        this.httpService.delete(ApiRegistroVacunasService.URI + '/' + id).subscribe(
            () => this.readAll(),
            error => alert(error)
        );
    }

    create(vacunaedad: ApiRegistroVacunas) {
        this.httpService.post(ApiRegistroVacunasService.URI, vacunaedad).subscribe(
            () => this.readAll(),
            error => alert(error)
        );
    }

    update(vacunaedad: ApiRegistroVacunas) {
        this.httpService.put(ApiRegistroVacunasService.URI + '/' + vacunaedad.id, vacunaedad).subscribe(
            () => this.readAll(),
            error => alert(error)
        );
    }
}

