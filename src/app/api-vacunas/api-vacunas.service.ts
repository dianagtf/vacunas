import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiVacunasService {
  constructor(private http: Http) { }
  getRepositories(user: string): Observable<string[]> {
    const url = `http://localhost:8000/api/v1/vacunas`;
    return this.http.get(url).map(
      response => response.json().map(vacunas => vacunas.id)
    ) // Los datos se filtran antes de ser enviados
    .catch(
      response => Observable.throw('Server error. ' + response.statusText)
    ); // para generar una nuevo error
  }
}
