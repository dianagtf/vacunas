import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpService } from '../core/http.service';
import { Vacunas } from './api-vacunas.model';
import { ApiVacunasService } from './api-vacunas.service';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api-vacunas',
  templateUrl: './api-vacunas.component.html'
})
export class ApiVacunasComponent implements OnInit {
  vacunas: Vacunas[];
  updateCheked = false;
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

  constructor(private httpService: HttpService, private apiVacunasService: ApiVacunasService) {
   }

  ngOnInit(): void {

    // this.apiVacunasService.getAllVacunas().subscribe(vacunas => this.vacunas = vacunas);

    this.apiVacunasService.getAllVacunas().subscribe((vacunas) => {
      this.vacunas = vacunas.vacunas;
    }, error => {
      this.errorMessage = error;
    });

    this.apiVacunasService.getUpdateVacuna().subscribe(vacuna => {
      this.updateVacuna = vacuna;
      this.updateCheked = true;
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
    this.updateCheked = false;
    this.apiVacunasService.update(this.updateVacuna);
  }

  create() {
    this.apiVacunasService.create(this.updateVacuna);
  }

  cancel() {
    this.updateCheked = false;
  }
}
