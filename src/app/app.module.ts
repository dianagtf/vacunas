import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { MaterialModule } from './material.module';


@NgModule({
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    AppRoutingModule.components,
    HeaderComponent,
    FooterComponent,
  ],
  bootstrap: [AppComponent],
  providers: []

})
export class AppModule { }
