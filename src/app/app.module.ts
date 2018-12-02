
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './workers/employess/list-employees.component';
import { CreateEmployeeComponent } from './workers/create-employee/create-employee.component';
import { SelectReqValidatorDirective } from './shared/select-required-validator.directive';
import { ConfirmEqual } from './shared/confirm-eq-validator.directive';
import { PasswordsComponent } from './passwords/passwords.component';


const appRoutes: Routes = [
{ path: 'list', component: ListEmployeesComponent },
{ path: 'create', component: CreateEmployeeComponent },
{ path: 'password', component: PasswordsComponent },
{ path: '', redirectTo: '/list', pathMatch: 'full' },
{path: '**',  redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectReqValidatorDirective,
    ConfirmEqual,
    PasswordsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
