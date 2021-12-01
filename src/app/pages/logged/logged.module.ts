import { NgModule } from '@angular/core';
import { LoggedComponent } from './logged.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CommonModule } from '@angular/common';
import { LoggedRoutingModule } from './logged-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';




@NgModule({
  declarations: [
    LoggedComponent,
    DashboardComponent,
    
  ],
  imports: [
    CommonModule,
    LoggedRoutingModule,
    ComponentsModule
  ]


})
export class LoggedModule { }
