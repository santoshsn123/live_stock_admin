import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppRoutes} from './app.routing';

import { AppComponent } from './app.component';
import { AdminComponent } from './layout/admin/admin.component';
import {ClickOutsideModule} from 'ng-click-outside';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BreadcrumbsComponent} from './layout/admin/breadcrumbs/breadcrumbs.component';
import {TitleComponent} from './layout/admin/title/title.component';
import {AuthComponent} from './layout/auth/auth.component';
import { AuthGuardService } from './service/auth-guard/auth-guard.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthenticationService } from './service/authentication/authentication.service';
import { CommonService } from './service/common/common.service';
import { CategoryComponent } from './pages/calculator/category/category.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CalculatorService } from './service/calculator/calculator.service';
import { AnimalsComponent } from './pages/calculator/animals/animals.component';
import { TrailerComponent } from './pages/calculator/trailer/trailer.component';
import { DashboardCustomComponent } from './pages/dashboard-custom/dashboard-custom.component';
import { MembershipComponent } from './pages/membership/membership.component';
import { DashboardService } from './service/dashboard/dashboard.service';
import { LoadsComponent } from './pages/loads/loads.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { LoadsCommanPageComponent } from './pages/loads-comman-page/loads-comman-page.component';
import { DataTableModule } from 'angular2-datatable';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    BreadcrumbsComponent,
    TitleComponent,
    AuthComponent,
    CategoryComponent,
    AnimalsComponent,
    TrailerComponent,
    DashboardCustomComponent,
    MembershipComponent,
    LoadsComponent,
    UserDetailsComponent,
    LoadsCommanPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    ClickOutsideModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    DataTableModule
  ],
  providers: [AuthGuardService,AuthenticationService,CommonService,CalculatorService,DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
