import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbrirCamaraPageRoutingModule } from './abrir-camara-routing.module';

import { AbrirCamaraPage } from './abrir-camara.page';
// import { Camera, CameraResultType } from '@capacitor/camera';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbrirCamaraPageRoutingModule
  ],
  declarations: [AbrirCamaraPage]
})
export class AbrirCamaraPageModule {}

