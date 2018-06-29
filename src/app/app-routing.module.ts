import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChildrenComponent } from './children/children.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ApiVacunasComponent } from './api-vacunas/api-vacunas.component';

import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';
import { ApiUsersComponent } from './api-users/api-users.component';
import { ApiRegistroVacunasComponent } from './api-registroVacunas/api-registroVacunas.component';
import { SignInComponent } from './signin/signin.component';
import { IndexComponent } from './index/index.component';

const appRoutes: Routes = [
  { path: 'children', component: ChildrenComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'apivacunas', component: ApiVacunasComponent},
  { path: 'apiusers', component: ApiUsersComponent},
  { path: 'apiregistrovacunas', component: ApiRegistroVacunasComponent},
  { path: 'signin', component: SignInComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignUpComponent },
  { path: 'index', component: IndexComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static components = [PageNotFoundComponent,
    ChildrenComponent,
    CalendarComponent,
    SignInComponent,
    LoginComponent,
    SignUpComponent,
    ApiVacunasComponent,
    ApiUsersComponent,
    ApiRegistroVacunasComponent,
    IndexComponent];
}
