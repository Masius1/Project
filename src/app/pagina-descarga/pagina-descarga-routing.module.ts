import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaDescargaPage } from './pagina-descarga.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaDescargaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaDescargaPageRoutingModule {}
