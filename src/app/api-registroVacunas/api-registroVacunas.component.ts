import { Component, OnInit, Inject } from '@angular/core';
import { HttpService } from '../core/http.service';
import { ApiRegistroVacunas } from './api-registroVacunas.model';
import { Vacunas } from '../api-vacunas/api-vacunas.model';
import { ApiRegistroVacunasService } from './api-registroVacunas.service';
import { ApiVacunasService } from '../api-vacunas/api-vacunas.service';
import { ApiUsersService } from '../api-users/api-users.service';
import 'rxjs/add/operator/map';

import { FlexLayoutModule } from '@angular/flex-layout';
import { Router } from '@angular/router';

import { FormControl, Validators } from '@angular/forms';
import { Users } from '../api-users/api-users.model';

import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-apiregistrovacunas',
  templateUrl: './api-registroVacunas.component.html',
  styleUrls: ['api-registroVacunas.component.css'],
})
export class ApiRegistroVacunasComponent implements OnInit {
  registroVacunas: ApiRegistroVacunas[];
  vacunas: Vacunas[];
  updateChecked = [false, false, false, false, false, false];
  createChecked = false;
  updateRegistroVacunas: ApiRegistroVacunas;
  creationRegistroVacunas: ApiRegistroVacunas;
  user: Users;
  vacunas1: ApiRegistroVacunas;
  vacunas2: ApiRegistroVacunas;
  vacunas3: ApiRegistroVacunas;
  vacunas4: ApiRegistroVacunas;
  vacunas5: ApiRegistroVacunas;
  vacunas6: ApiRegistroVacunas;
  vacunas7: ApiRegistroVacunas;
  vacunas8: ApiRegistroVacunas;
  vacunas9: ApiRegistroVacunas;

  edadControl = new FormControl('', [Validators.required]);
  date: FormControl;
  id_months: number;

  selectedValue: string;

  errorMessage = '';
  displayedColumns = [
    'age',
    'edad',
    'vacuna1',
    'vacuna2',
    'vacuna3',
    'vacuna4',
    'vacuna5',
    'vacuna6'
  ];

  animal: string;
  name: string;

  constructor(private httpService: HttpService,
    private apiRegistroVacunasService: ApiRegistroVacunasService,
    private apiVacunasService: ApiVacunasService,
    public dialog: MatDialog,
    private apiUsersService: ApiUsersService,
    private router: Router) {
   }
  ngOnInit(): void {
    this.updateRegistroVacunas = {
      id: 1,
      name: '',
      age: '',
      edad: '',
      vacuna1: '',
      vacuna2: '',
      vacuna3: '',
      vacuna4: '',
      vacuna5: '',
      vacuna6: '',
      isVacunated1: false,
      isVacunated2: false,
      isVacunated3: false,
      isVacunated4: false,
      isVacunated5: false,
      isVacunated6: false,
      dateVacuna1: '',
      dateVacuna2: '',
      dateVacuna3: '',
      dateVacuna4: '',
      dateVacuna5: '',
      dateVacuna6: ''
    };

    this.apiVacunasService.getAllVacunas().subscribe((vacunas) => {
      this.vacunas = vacunas;
    }, error => {
      this.errorMessage = error;
    });

    this.apiRegistroVacunasService.getAllRegistroVacunas().subscribe((registrovacunas) => {
      this.registroVacunas = registrovacunas;
    }, error => {
      this.errorMessage = error;
    });

    this.apiRegistroVacunasService.getUpdateVacuna().subscribe(registrovacunas => {
      this.updateRegistroVacunas = registrovacunas;
    });

    this.apiRegistroVacunasService.getReadRegistroVacunas().subscribe(registrovacunas =>
      alert(registrovacunas.id + ':' + registrovacunas.age));

    this.vacunas1 = {
      id: 1, name: 'Sara', age: '', edad: '', vacuna1: 'Poliomelitis', vacuna2: 'Difteria-Tétanos-Pertussis',
      vacuna3: 'Haemophilus influenzae b', vacuna4: 'Hepatitis B', vacuna5: 'Neumocócica conjugada 13V', vacuna6: '',
      isVacunated1: false, isVacunated2: false, isVacunated3: false, isVacunated4: false, isVacunated5: false, isVacunated6: false,
      dateVacuna1: '', dateVacuna2: '', dateVacuna3: '', dateVacuna4: '', dateVacuna5: '', dateVacuna6: ''
    };

    this.user = {id: 1, username: 'user1', firstName: 'user1', lastName: 'user1', email: 'user1@gmail.com',
      password: 'xxx', numChildren: 2};
  }

  read(id: number) {
    this.apiRegistroVacunasService.read(id);
  }

  delete(id: number) {
    this.apiRegistroVacunasService.delete(id);
  }

  prepareUpdate(id: number, months: string) {
    switch (months) {
      case 'twoMonts':
        this.id_months = 1;
        break;
      case 'fourMonths':
        this.id_months = 2;
        break;
      case 'elevenMonths':
        this.id_months = 3;
        break;
      case 'twelveMonths':
        this.id_months = 4;
        break;
      case 'fifteenMonths':
        this.id_months = 5;
        break;
      case 'fourYears':
        this.id_months = 6;
        break;
      case 'sixYears':
        this.id_months = 7;
        break;
      case 'twelveYears':
        this.id_months = 8;
        break;
      case 'fourteenYears':
        this.id_months = 9;
        break;
      default:
        this.id_months = 1;
    }
    this.apiRegistroVacunasService.prepareUpdate(this.id_months);
    this.updateChecked[id] = true;
  }

  save(id: number) {
    this.updateChecked[id] = false;
    this.apiRegistroVacunasService.update(this.updateRegistroVacunas);

    this.apiRegistroVacunasService.getAllRegistroVacunas().subscribe((registrovacunas) => {
      this.registroVacunas = registrovacunas,
      this.router.navigate(['/children']);
    }, error => {
      this.errorMessage = error;
    });
  }

  create() {
    this.apiRegistroVacunasService.create(this.vacunas1);
  }

  cancel(id: number) {
    this.updateChecked[id] = false;
  }
}


