import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpService } from '../core/http.service';
import { VacunaUser } from './api-vacunaUser.model';
import { Vacunas } from '../api-vacunas/api-vacunas.model';
import { ApiVacunaUserService } from './api-vacunaUser.service';
import { ApiVacunasService } from '../api-vacunas/api-vacunas.service';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api-vacunauser',
  templateUrl: './api-vacunauser.component.html'
})
export class ApiVacunaUserComponent implements OnInit {
  vacunauser: VacunaUser[];
  vacunas: Vacunas[];
  updateChecked = false;
  updateVacunaUser: VacunaUser;
  creationVacunaUser: VacunaUser;

  errorMessage = '';
  displayedColumns = [
    'name',
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

  constructor(private httpService: HttpService,
    private apiVacunaUserService: ApiVacunaUserService,
    private apiVacunasService: ApiVacunasService) {
   }

  ngOnInit(): void {

    // this.apiVacunasService.getAllVacunas().subscribe(vacunas => this.vacunas = vacunas);

    this.apiVacunasService.getAllVacunas().subscribe((vacunas) => {
      this.vacunas = vacunas;
    }, error => {
      this.errorMessage = error;
    });

    this.apiVacunaUserService.getAllVacunaUser().subscribe((vacunauser) => {
      this.vacunauser = vacunauser;
    }, error => {
      this.errorMessage = error;
    });

    this.apiVacunaUserService.getUpdateVacuna().subscribe(vacunauser => {
      this.updateVacunaUser = vacunauser;
      this.updateChecked = true;
    });

    this.apiVacunaUserService.getReadVacunaUser().subscribe(vacunauser => alert(vacunauser.id + ':' + vacunauser.name));
  }

  read(id: number) {
    this.apiVacunaUserService.read(id);
  }

  delete(id: number) {
    this.apiVacunaUserService.delete(id);
  }

  prepareUpdate(id: number) {
    this.apiVacunaUserService.prepareUpdate(id);
  }

  save() {
    this.updateChecked = false;
    this.apiVacunaUserService.update(this.updateVacunaUser);
  }

  create() {
    this.apiVacunaUserService.create(this.updateVacunaUser);
  }

  cancel() {
    this.updateChecked = false;
  }
}
