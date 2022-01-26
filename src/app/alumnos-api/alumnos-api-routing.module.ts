import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnosApiPage } from './alumnos-api.page';

const routes: Routes = [
  {
    path: '',
    component: AlumnosApiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnosApiPageRoutingModule {}
