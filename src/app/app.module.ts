import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { HttpService } from './core/http.service';
import { ApiVacunasService } from './api-vacunas/api-vacunas.service';
import { ApiUsersService } from './api-users/api-users.service';
import { ApiVacunaUserService } from './api-vacunaUser/api-vacunaUser.service';
import { ApiVacunaEdadService } from './api-vacunaEdad/api-vacunaEdad.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';

import { AuthenticationService } from './core/authentication.service';
import { AlertService } from './core/alert.service';
import { UserService } from './user/user.service';
import { EmailService } from './email/email.service';

import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    FlexLayoutModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    AppRoutingModule.components,
    HeaderComponent,
    FooterComponent,
  ],
  bootstrap: [AppComponent],
  providers: [HttpService, ApiVacunasService, ApiUsersService, AuthenticationService,
    AlertService, UserService, ApiVacunaUserService, ApiVacunaEdadService, EmailService]

})
export class AppModule { }
