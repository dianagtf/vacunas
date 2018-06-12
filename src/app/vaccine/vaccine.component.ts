import { Component } from '@angular/core';
import { Http } from '@angular/http';


/**
 * @title Basic table
 */
@Component({
  selector: 'app-vaccine',
  templateUrl: 'vaccine.component.html'
})
export class VaccineComponent {
  static url = 'http://localhost:8000/api/v1/vacunas';
  status: number;
  statusText: string;
  numVacunas: number;

  displayedColumns = [
    'nombre'/*,
    'twoMonths',
    'fourMonths',
    'elevenMonths',
    'twelveMonths',
    'fiveteenMonths',
    'fourYears',
    'sixYears',
    'twelveYears',
    'fourteenYears'*/
  ];
  dataSource = VACCINE_LIST;

  constructor(private http: Http) {}

  search() {
    this.http.get(VaccineComponent.url).subscribe(response => {
      this.status = response.status;
      this.statusText = response.statusText;
      console.log(this.status);
      this.numVacunas = Object.keys(response.json().vacunas).length;

      for (let i = 0; i < this.numVacunas; i ++) {
          VACCINE_LIST [i] = {nombre: (response.json().vacunas[i].nombre)};
          console.log('Bucle for: ');
          console.log(response.json().vacunas[i].nombre);
      }
    });
    console.log('Fuera: ');
      console.log(VACCINE_LIST);
  }
}
const VACCINE_LIST: Element[] = [];
/*export function search() {
  this.http.get(VaccineComponent.url).subscribe(response => {
    this.status = response.status;
    this.statusText = response.statusText;
    console.log(this.status);
    this.numVacunas = Object.keys(response.json().vacunas).length;
    for (let i = 0; i < this.numVacunas; i ++) {
        VACCINE_LIST [i] = response.json().vacunas[i].nombre;
        console.log(response.json().vacunas[i].nombre);
    }
  });
}*/

export interface Element {
  nombre: string;
  /*twoMonths: string;
  fourMonths: string;
  elevenMonths: string;
  twelveMonths: string;
  fiveteenMonths: string;
  fourYears: string;
  sixYears: string;
  twelveYears: string;
  fourteenYears: string;*/
}

/*const VACCINE_LIST: Element[] = [
  {
    vaccine: "Poliomielitis",
    twoMonths: "VPI",
    fourMonths: "VPI",
    elevenMonths: "VPI",
    twelveMonths: "",
    fiveteenMonths: "",
    fourYears: "",
    sixYears: "",
    twelveYears: "",
    fourteenYears: ""
  },
  {
    vaccine: "Difteria-Tétanos-Pertussis",
    twoMonths: "DTPa",
    fourMonths: "DTPa",
    elevenMonths: "DTPa",
    twelveMonths: "",
    fiveteenMonths: "",
    fourYears: "",
    sixYears: "DTPaC/ VPI",
    twelveYears: "",
    fourteenYears: "Td"
  },
  {
    vaccine: "Haemophilus influenzae b",
    twoMonths: "Hib",
    fourMonths: "Hib",
    elevenMonths: "Hib",
    twelveMonths: "",
    fiveteenMonths: "",
    fourYears: "",
    sixYears: "",
    twelveYears: "",
    fourteenYears: ""
  },
  {
    vaccine: "Hepatitis B",
    twoMonths: "HB",
    fourMonths: "HB",
    elevenMonths: "HB",
    twelveMonths: "",
    fiveteenMonths: "",
    fourYears: "",
    sixYears: "",
    twelveYears: "",
    fourteenYears: ""
  },
  {
    vaccine: "Neumocócica conjugada 13V",
    twoMonths: "VNC13",
    fourMonths: "VNC13",
    elevenMonths: "VNC13",
    twelveMonths: "",
    fiveteenMonths: "",
    fourYears: "",
    sixYears: "",
    twelveYears: "",
    fourteenYears: ""
  },
  {
    vaccine: "Sarampión-Rubeola-Parotiditis",
    twoMonths: "DTPa",
    fourMonths: "DTPa",
    elevenMonths: "DTPa",
    twelveMonths: "",
    fiveteenMonths: "",
    fourYears: "",
    sixYears: "",
    twelveYears: "",
    fourteenYears: ""
  },
  {
    vaccine: "Meningococo C",
    twoMonths: "",
    fourMonths: "",
    elevenMonths: "",
    twelveMonths: "TV",
    fiveteenMonths: "",
    fourYears: "TV",
    sixYears: "",
    twelveYears: "",
    fourteenYears: ""
  },
  {
    vaccine: "Varicela",
    twoMonths: "",
    fourMonths: "MenCB",
    elevenMonths: "",
    twelveMonths: "MenCB",
    fiveteenMonths: "",
    fourYears: "",
    sixYears: "",
    twelveYears: "MenC",
    fourteenYears: ""
  },
  {
    vaccine: "Fluorine",
    twoMonths: "",
    fourMonths: "",
    elevenMonths: "",
    twelveMonths: "",
    fiveteenMonths: "VVZ",
    fourYears: "VVZ",
    sixYears: "",
    twelveYears: "VVZD",
    fourteenYears: ""
  },
  {
    vaccine: "Virus del Papiloma Humano",
    twoMonths: "",
    fourMonths: "",
    elevenMonths: "",
    twelveMonths: "",
    fiveteenMonths: "",
    fourYears: "",
    sixYears: "",
    twelveYears: "VPHE",
    fourteenYears: ""
  }
];*/
