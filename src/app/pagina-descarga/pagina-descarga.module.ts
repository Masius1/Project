import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaDescargaPageRoutingModule } from './pagina-descarga-routing.module';

import { PaginaDescargaPage } from './pagina-descarga.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaDescargaPageRoutingModule
  ],
  declarations: [PaginaDescargaPage]
})
export class PaginaDescargaPageModule {}
