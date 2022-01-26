import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamaraPageRoutingModule } from './camara-routing.module';

import { CamaraPage } from './camara.page';
//import { Camera }  from '@ionic-native/camera';
//import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@NgModule({
  imports:  [
    CommonModule,
    FormsModule,
    IonicModule,
    CamaraPageRoutingModule,
    ,
  ],
  declarations: [CamaraPage]
})
export class CamaraPageModule {}
