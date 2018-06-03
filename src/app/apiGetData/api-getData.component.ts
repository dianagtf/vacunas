import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'app-apigetdata',
    template: `<h2>API Response</h2>
               <button (click)="search()">Search</button>(http://localhost:8000/api/v1/vacunas)
               <p>status: {{status}}</p>
               <p>statusText: {{statusText}}</p>
               <p>json: {{json}}</p>
               <!-- <p>id: {{id}}</p>
               <p>name: {{name}}</p>
               <p>idVacuna: login: {{idVacuna}}</p>
               <p>html_url: {{htmlUrl}}</p> -->
               <p><button (click)="searchId()">Search Id</button>{{id2}}</p>
               `
})
export class ApiGetDataComponent {
    static url = 'http://localhost:8000/api/v1/vacunas';
    status: number;
    statusText: string;
    json: string;
    id: number;
    name: string;
    idVacuna: string;
    htmlUrl: string;

    id2: number;

    constructor(private http: Http) { }

    search() {
        this.http.get(ApiGetDataComponent.url).subscribe(response => {
            this.status = response.status;
            this.statusText = response.statusText;
            this.json = response.text();
            // this.id = response.json().vacunas.id;
            // this.id = response.json().vacunas;
            // this.name = response.json().name;
            // this.idVacuna = response.json().vacunas.vacuna.id;
            // this.htmlUrl = response.json().html_url;
        });
    }
    searchId() {
        this.http.get(ApiGetDataComponent.url).map(response => response.json().id)
            .subscribe(id => this.id2 = id);
    }
}
