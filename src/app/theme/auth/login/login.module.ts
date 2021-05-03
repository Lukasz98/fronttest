import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import {CustomFormsModule} from 'ngx-custom-validators';
import {SharedModule} from '../../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AlertModule } from '@app/theme/alert/alert.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    CustomFormsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule,
  ]
})
export class LoginModule { }
