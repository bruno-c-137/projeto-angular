import { NgModule } from '@angular/core';
import { SitesComponent } from './sites.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { SitesRoutingModule } from './sites-routing.module';




@NgModule({
  declarations: [
    SitesComponent,
    HomeComponent

  ],
  imports: [
    CommonModule,
    SitesRoutingModule,


  ]


})
export class SitesModule { }
