import { Component, OnInit, Inject } from '@angular/core';
import { HttpService } from '../core/http.service';
import { VacunaEdad } from './api-vacunaEdad.model';
import { Vacunas } from '../api-vacunas/api-vacunas.model';
import { ApiVacunaEdadService } from './api-vacunaEdad.service';
import { ApiVacunasService } from '../api-vacunas/api-vacunas.service';
import { ApiUsersService } from '../api-users/api-users.service';
import 'rxjs/add/operator/map';

import { FlexLayoutModule } from '@angular/flex-layout';

import { FormControl, Validators } from '@angular/forms';
import { Users } from '../api-users/api-users.model';

import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-api-vacunaedad',
  templateUrl: './api-vacunaedad.component.html',
  styleUrls: ['api-vacunaedad.component.css'],
})
export class ApiVacunaEdadComponent implements OnInit {
  vacunaedad: VacunaEdad[];
  vacunas: Vacunas[];
  updateChecked = [false, false, false, false, false, false];
  createChecked = false;
  updateVacunaEdad: VacunaEdad;
  creationVacunaEdad: VacunaEdad;
  user: Users;
  vacunas1: VacunaEdad;
  vacunas2: VacunaEdad;
  vacunas3: VacunaEdad;
  vacunas4: VacunaEdad;
  vacunas5: VacunaEdad;
  vacunas6: VacunaEdad;
  vacunas7: VacunaEdad;
  vacunas8: VacunaEdad;
  vacunas9: VacunaEdad;

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
    private apiVacunaEdadService: ApiVacunaEdadService,
    private apiVacunasService: ApiVacunasService,
    public dialog: MatDialog,
    private apiUsersService: ApiUsersService) {
   }
  ngOnInit(): void {
    this.updateVacunaEdad = {
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

    // this.apiVacunasService.getAllVacunas().subscribe(vacunas => this.vacunas = vacunas);
    this.apiVacunasService.getAllVacunas().subscribe((vacunas) => {
      this.vacunas = vacunas;
    }, error => {
      this.errorMessage = error;
    });

    this.apiVacunaEdadService.getAllVacunaEdad().subscribe((vacunaedad) => {
      this.vacunaedad = vacunaedad;
    }, error => {
      this.errorMessage = error;
    });

    this.apiVacunaEdadService.getUpdateVacuna().subscribe(vacunaedad => {
      this.updateVacunaEdad = vacunaedad;
    });

    this.apiVacunaEdadService.getReadVacunaEdad().subscribe(vacunaedad => alert(vacunaedad.id + ':' + vacunaedad.age));

    this.vacunas1 = {
      id: 1, name: 'Sara', age: '', edad: '', vacuna1: 'Poliomelitis', vacuna2: 'Difteria-Tétanos-Pertussis',
      vacuna3: 'Haemophilus influenzae b', vacuna4: 'Hepatitis B', vacuna5: 'Neumocócica conjugada 13V', vacuna6: '',
      isVacunated1: false, isVacunated2: false, isVacunated3: false, isVacunated4: false, isVacunated5: false, isVacunated6: false,
      dateVacuna1: '', dateVacuna2: '', dateVacuna3: '', dateVacuna4: '', dateVacuna5: '', dateVacuna6: ''
    };
    /*this.vacunas2 = {
      id: 1, user: this.user, name: 'Sara', age: '', edad: '', vacuna1: 'Poliomelitis', vacuna2: 'Difteria-Tétanos-Pertussis',
      vacuna3: 'Haemophilus influenzae b', vacuna4: 'Hepatitis B', vacuna5: 'Neumocócica conjugada 13V', vacuna6: 'Meningococo C',
      isVacunated1: false, isVacunated2: false, isVacunated3: false, isVacunated4: false, isVacunated5: false, isVacunated6: false,
      dateVacuna1: '', dateVacuna2: '', dateVacuna3: '', dateVacuna4: '', dateVacuna5: '', dateVacuna6: ''
    };
    this.vacunas3 = {
      id: 1, user: this.user, name: 'Sara', age: '', edad: '', vacuna1: 'Poliomelitis', vacuna2: 'Difteria-Tétanos-Pertussis',
      vacuna3: 'Haemophilus influenzae b', vacuna4: 'Hepatitis B', vacuna5: 'Neumocócica conjugada 13V', vacuna6: '',
      isVacunated1: false, isVacunated2: false, isVacunated3: false, isVacunated4: false, isVacunated5: false, isVacunated6: false,
      dateVacuna1: '', dateVacuna2: '', dateVacuna3: '', dateVacuna4: '', dateVacuna5: '', dateVacuna6: ''
    };
    this.vacunas4 = {
      id: 1, user: this.user, name: 'Sara', age: '', edad: '', vacuna1: 'Sarampión-Rubeola-Parotiditis',
      vacuna2: 'Meningococo C', vacuna3: '', vacuna4: '', vacuna5: '', vacuna6: '',
      isVacunated1: false, isVacunated2: false, isVacunated3: false, isVacunated4: false, isVacunated5: false, isVacunated6: false,
      dateVacuna1: '', dateVacuna2: '', dateVacuna3: '', dateVacuna4: '', dateVacuna5: '', dateVacuna6: ''
    };
    this.vacunas5 = {
      id: 1, user: this.user, name: 'Sara', age: '', edad: '', vacuna1: 'Varicela', vacuna2: '', vacuna3: '', vacuna4: '',
      vacuna5: '', vacuna6: '',
      isVacunated1: false, isVacunated2: false, isVacunated3: false, isVacunated4: false, isVacunated5: false, isVacunated6: false,
      dateVacuna1: '', dateVacuna2: '', dateVacuna3: '', dateVacuna4: '', dateVacuna5: '', dateVacuna6: ''
    };
    this.vacunas6 = {
      id: 1, user: this.user, name: 'Sara', age: '', edad: '', vacuna1: 'Sarampión-Rubeola-Parotiditis', vacuna2: 'Varicela',
      vacuna3: '', vacuna4: '', vacuna5: '', vacuna6: '',
      isVacunated1: false, isVacunated2: false, isVacunated3: false, isVacunated4: false, isVacunated5: false, isVacunated6: false,
      dateVacuna1: '', dateVacuna2: '', dateVacuna3: '', dateVacuna4: '', dateVacuna5: '', dateVacuna6: ''
    };
    this.vacunas7 = {
      id: 1, user: '1', name: 'Sara', age: '', edad: '', vacuna1: 'Difteria-Tétanos-Pertussis', vacuna2: '',
      vacuna3: '', vacuna4: '', vacuna5: '', vacuna6: '',
      isVacunated1: false, isVacunated2: false, isVacunated3: false, isVacunated4: false, isVacunated5: false, isVacunated6: false,
      dateVacuna1: '', dateVacuna2: '', dateVacuna3: '', dateVacuna4: '', dateVacuna5: '', dateVacuna6: ''
    };
    this.vacunas8 = {
      id: 1, user: this.user, name: 'Sara', age: '', edad: '', vacuna1: 'Meningococo C', vacuna2: 'Varicela',
      vacuna3: 'Virus del Papiloma Humano', vacuna4: '', vacuna5: '', vacuna6: '',
      isVacunated1: false, isVacunated2: false, isVacunated3: false, isVacunated4: false, isVacunated5: false, isVacunated6: false,
      dateVacuna1: '', dateVacuna2: '', dateVacuna3: '', dateVacuna4: '', dateVacuna5: '', dateVacuna6: ''
    };
    this.vacunas9 = {
      id: 1, user: this.user, name: 'Sara', age: '', edad: '', vacuna1: 'Difteria-Tétanos-Pertussis', vacuna2: '',
      vacuna3: '', vacuna4: '', vacuna5: '', vacuna6: '',
      isVacunated1: false, isVacunated2: false, isVacunated3: false, isVacunated4: false, isVacunated5: false, isVacunated6: false,
      dateVacuna1: '', dateVacuna2: '', dateVacuna3: '', dateVacuna4: '', dateVacuna5: '', dateVacuna6: ''
    };*/

    this.user = {id: 1, username: 'user1', firstName: 'user1', lastName: 'user1', email: 'user1@gmail.com',
      password: 'xxx', passwordRepeat: 'xxx', numChildren: 2, childrenBirthday: '13/02/2018'};
  }

  read(id: number) {
    this.apiVacunaEdadService.read(id);
  }

  delete(id: number) {
    this.apiVacunaEdadService.delete(id);
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
    this.apiVacunaEdadService.prepareUpdate(this.id_months);
    this.updateChecked[id] = true;
  }

  save(id: number) {
    this.updateChecked[id] = false;
    this.apiVacunaEdadService.update(this.updateVacunaEdad);

    this.apiVacunaEdadService.getAllVacunaEdad().subscribe((vacunaedad) => {
      this.vacunaedad = vacunaedad;
    }, error => {
      this.errorMessage = error;
    });
  }

  create() {
    this.apiVacunaEdadService.create(this.vacunas1);
    /*this.apiVacunaEdadService.create(this.vacunas2);
    this.apiVacunaEdadService.create(this.vacunas3);
    this.apiVacunaEdadService.create(this.vacunas4);
    this.apiVacunaEdadService.create(this.vacunas5);
    this.apiVacunaEdadService.create(this.vacunas6);
    this.apiVacunaEdadService.create(this.vacunas7);
    this.apiVacunaEdadService.create(this.vacunas8);
    this.apiVacunaEdadService.create(this.vacunas9);*/
  }

  cancel(id: number) {
    this.updateChecked[id] = false;
  }
}


