import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnosApiPageRoutingModule } from './alumnos-api-routing.module';

import { AlumnosApiPage } from './alumnos-api.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnosApiPageRoutingModule
  ],
  declarations: [AlumnosApiPage]
})
export class AlumnosApiPageModule {}
