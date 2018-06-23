import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildActivationEnd } from '@angular/router';

import { ChildrenComponent } from './children/children.component';
import { CalendarComponent } from './calendar/calendar.component';
import { VaccineComponent} from './vaccine/vaccine.component';
import { ApiVacunasComponent } from './api-vacunas/api-vacunas.component';

import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ApiUsersComponent } from './api-users/api-users.component';
import { ApiVacunaUserComponent } from './api-vacunaUser/api-vacunaUser.component';
import { ApiVacunaEdadComponent } from './api-vacunaEdad/api-vacunaEdad.component';
import { EmailComponent } from './email/email.component';

const appRoutes: Routes = [
  { path: 'children', component: ChildrenComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'vaccine', component: VaccineComponent},
  { path: 'apivacunas', component: ApiVacunasComponent},
  { path: 'apiusers', component: ApiUsersComponent},
  { path: 'apivacunauser', component: ApiVacunaUserComponent},
  { path: 'apivacunaedad', component: ApiVacunaEdadComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'email', component: EmailComponent},
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
    VaccineComponent,
    LoginComponent,
    RegisterComponent,
    ApiVacunasComponent,
    ApiUsersComponent,
    ApiVacunaUserComponent,
    ApiVacunaEdadComponent,
    EmailComponent];
}
