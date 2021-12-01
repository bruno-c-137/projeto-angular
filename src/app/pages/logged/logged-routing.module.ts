import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoggedComponent } from './logged.component';




const routes: Routes = [{
  path: '',
  component: LoggedComponent,
  children: [
    {
      path: '',
      component: DashboardComponent,


    }
  ]


}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedRoutingModule { }
