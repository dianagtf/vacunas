import { Injectable } from '@angular/core';
import { HttpService } from '../core/http.service';
import { ApiRegistroVacunas } from './api-registroVacunas.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ApiRegistroVacunasService {
    static URI = '/registrovacunas';

    private readRegistroVacunas: Subject<ApiRegistroVacunas> = new Subject();

    private updateRegistroVacunas: Subject<ApiRegistroVacunas> = new Subject();

    private allRegistroVacunas: Subject<ApiRegistroVacunas[]> = new Subject();

    constructor(private httpService: HttpService) { }

    getAllRegistroVacunas(): Observable<ApiRegistroVacunas[]> {
        this.readAll();
        return this.allRegistroVacunas.asObservable();
    }

    getUpdateVacuna(): Observable<ApiRegistroVacunas> {
        return this.updateRegistroVacunas.asObservable();
    }

    prepareUpdate(id: number) {
        this.httpService.get(ApiRegistroVacunasService.URI + '/' + id).subscribe(
            (registroVacunasArray: ApiRegistroVacunas) => this.updateRegistroVacunas.next(registroVacunasArray),
            error => alert(error)
        );
    }

    getReadRegistroVacunas(): Observable<ApiRegistroVacunas> {
        return this.readRegistroVacunas.asObservable();
    }

    read(id: number) {
        this.httpService.get(ApiRegistroVacunasService.URI + '/' + id).subscribe(
            (registroVacunasValue: ApiRegistroVacunas) => this.readRegistroVacunas.next(registroVacunasValue),
            error => alert(error),
        );
    }


    private readAll() {
        this.httpService.get(ApiRegistroVacunasService.URI).subscribe(
            (registroVacunasArray: ApiRegistroVacunas[]) => this.allRegistroVacunas.next(registroVacunasArray),
            error => alert(error)
        );
    }

    delete(id: number) {
        this.httpService.delete(ApiRegistroVacunasService.URI + '/' + id).subscribe(
            () => this.readAll(),
            error => alert(error)
        );
    }

    create(registroVacunas: ApiRegistroVacunas) {
        this.httpService.post(ApiRegistroVacunasService.URI, registroVacunas).subscribe(
            () => this.readAll(),
            error => alert(error)
        );
    }

    update(registroVacunas: ApiRegistroVacunas) {
        this.httpService.put(ApiRegistroVacunasService.URI + '/' + registroVacunas.id, registroVacunas).subscribe(
            () => this.readAll(),
            error => alert(error)
        );
    }
}

