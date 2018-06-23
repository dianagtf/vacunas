import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ApiVacunasService } from '../api-vacunas/api-vacunas.service';
import { Vacunas } from '../api-vacunas/api-vacunas.model';


@Component({
  selector: 'app-vaccine',
  templateUrl: 'vaccine.component.html'
})
export class VaccineComponent implements OnInit {
  vacunas: Vacunas[];
  errorMessage = '';

  edadControl = new FormControl('', [Validators.required]);
  edadOption = [
    { edad: '2 Meses', age: 'twoMonths'},
    { edad: '4 Meses', age: 'fourMonths'},
    { edad: '11 Meses', age: 'elevenMonths'},
    { edad: '12 Meses', age: 'twelveMonths'},
    { edad: '15 Meses', age: 'fiveteenMonths'},
    { edad: '4 Años', age: 'fourYears'},
    { edad: '6 Años', age: 'sixYears'},
    { edad: '12 Años', age: 'twelveYears'},
    { edad: '14 Años', age: 'fourteenYears'},
   ];

  constructor(private apiVacunasService: ApiVacunasService) {}

  ngOnInit(): void {
    this.apiVacunasService.getAllVacunas().subscribe(
      vacunas => {
        this.vacunas = vacunas;
      },
      error => {
        this.errorMessage = error;
      }
    );
  }
}
