import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { HttpService } from './core/http.service';
import { ApiVacunasService } from './api-vacunas/api-vacunas.service';
import { ApiUsersService } from './api-users/api-users.service';
import { ApiVacunaUserService } from './api-vacunaUser/api-vacunaUser.service';
import { ApiRegistroVacunasService } from './api-registroVacunas/api-registroVacunas.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';

import { AlertService } from './core/alert.service';
import { UserService } from './user/user.service';

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
    FooterComponent
  ],
  bootstrap: [AppComponent],
  providers: [HttpService, ApiVacunasService, ApiUsersService,
    AlertService, UserService, ApiVacunaUserService, ApiRegistroVacunasService]

})
export class AppModule { }
