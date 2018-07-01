import { Component, OnInit } from '@angular/core';
import { Vacunas } from './api-vacunas.model';
import { ApiVacunasService } from './api-vacunas.service';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Component({
  selector: 'app-api-vacunas',
  templateUrl: './api-vacunas.component.html',
  styleUrls: ['./api-vacunas.component.css']
})
export class ApiVacunasComponent implements OnInit {
  vacunas: Vacunas[];
  updateChecked = false;
  updateVacuna: Vacunas;
  creationVacunas: Vacunas;

  errorMessage = '';
  displayedColumns = [
    'name',
    'conditions',
    'twoMonths',
    'fourMonths',
    'elevenMonths',
    'twelveMonths',
    'fiveteenMonths',
    'fourYears',
    'sixYears',
    'twelveYears',
    'fourteenYears'
  ];

  constructor(
    private apiVacunasService: ApiVacunasService,
    private router: Router) {
   }

  ngOnInit(): void {

    // this.apiVacunasService.getAllVacunas().subscribe(vacunas => this.vacunas = vacunas);

    this.apiVacunasService.getAllVacunas().subscribe((vacunas) => {
      this.vacunas = vacunas;
    }, error => {
      this.errorMessage = error;
    });

    this.apiVacunasService.getUpdateVacuna().subscribe(vacuna => {
      this.updateVacuna = vacuna;
      this.updateChecked = true;
    });

    this.apiVacunasService.getReadVacuna().subscribe(vacunas => alert(vacunas.id + ':' + vacunas.name + ',' + vacunas.conditions));
  }

  read(id: number) {
    this.apiVacunasService.read(id);
  }

  delete(id: number) {
    this.apiVacunasService.delete(id);
  }

  prepareUpdate(id: number) {
    this.apiVacunasService.prepareUpdate(id);
  }

  save() {
    this.updateChecked = false;
    this.apiVacunasService.update(this.updateVacuna);
  }

  create() {
    this.apiVacunasService.create(this.updateVacuna);
  }

  cancel() {
    this.updateChecked = false;
  }

}
