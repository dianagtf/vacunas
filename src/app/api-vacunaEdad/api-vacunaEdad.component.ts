import { Component, OnInit } from '@angular/core';
import { HttpService } from '../core/http.service';
import { VacunaEdad } from './api-vacunaEdad.model';
import { Vacunas } from '../api-vacunas/api-vacunas.model';
import { ApiVacunaEdadService } from './api-vacunaEdad.service';
import { ApiVacunasService } from '../api-vacunas/api-vacunas.service';
import 'rxjs/add/operator/map';

import { FlexLayoutModule } from '@angular/flex-layout';

import { FormControl, Validators } from '@angular/forms';
import { Users } from '../api-users/api-users.model';

@Component({
  selector: 'app-api-vacunaedad',
  templateUrl: './api-vacunaedad.component.html'
})
export class ApiVacunaEdadComponent implements OnInit {
  vacunaedad: VacunaEdad[];
  vacunas: Vacunas[];
  updateChecked = [false, false, false, false, false, false];
  createChecked = false;
  updateVacunaEdad: VacunaEdad;
  creationVacunaEdad: VacunaEdad;
  user: Users;

  edadControl = new FormControl('', [Validators.required]);
  date: FormControl;

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

  constructor(private httpService: HttpService,
    private apiVacunaEdadService: ApiVacunaEdadService,
    private apiVacunasService: ApiVacunasService) {
   }

  ngOnInit(): void {
    this.updateVacunaEdad = {
      id: 1,
      user_id: this.user,
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
      this.updateChecked[1] = true;
    });

    this.apiVacunaEdadService.getReadVacunaEdad().subscribe(vacunaedad => alert(vacunaedad.id + ':' + vacunaedad.age));
  }

  read(id: number) {
    this.apiVacunaEdadService.read(id);
  }

  delete(id: number) {
    this.apiVacunaEdadService.delete(id);
  }

  prepareUpdate(id: number) {
    this.apiVacunaEdadService.prepareUpdate(id);
    this.save(id);
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
    this.apiVacunaEdadService.create(this.updateVacunaEdad);
  }

  prepareCreate(id: number) {
    this.createChecked[id] = true;
  }

  cancel(id: number) {
    this.updateChecked[id] = false;
  }
}
