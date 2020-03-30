import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from '../component/admin/partials/footer/footer.component';
import { BarraNotifComponent } from '../component/admin/partials/barra-notif/barra-notif.component';
import { MenuAdminComponent } from '../component/admin/partials/menu-admin/menu-admin.component';
import { PrincipalAdminComponent } from '../component/admin/principal-admin/principal-admin.component';
import { DashboardComponent } from '../component/admin/dashboard/dashboard.component';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from '../component/home/home.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Route[] = [
  {path: '', component: HomeComponent },
  {path: 'home', component: HomeComponent },
  {path: 'admin', component: PrincipalAdminComponent,
   children: [
    {path: '', component: DashboardComponent },
   ] },

];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BarraNotifComponent,
    MenuAdminComponent,
    PrincipalAdminComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
