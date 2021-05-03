import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './layout/admin/admin.component';
import { AuthComponent } from './layout/auth/auth.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {MenuItems} from './shared/menu-items/menu-items';
import {BreadcrumbsComponent} from './layout/admin/breadcrumbs/breadcrumbs.component';
import { AlertModule } from './theme/alert/alert.module';
import { ProfileCardComponent } from './theme/profile-card/profile-card.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthComponent,
    BreadcrumbsComponent,
    ProfileCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AlertModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [MenuItems],
  bootstrap: [AppComponent]
})
export class AppModule { }
