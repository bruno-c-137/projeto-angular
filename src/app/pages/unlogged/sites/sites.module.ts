import { NgModule } from '@angular/core';
import { SitesComponent } from './sites.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { SitesRoutingModule } from './sites-routing.module';
import { ComponentsModule } from '../../../components/components.module';
import { HeaderComponent } from 'src/app/components/header/header.component';




@NgModule({
  declarations: [
    SitesComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SitesRoutingModule,
    ComponentsModule
    


  ]


})
export class SitesModule { }
