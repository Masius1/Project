import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//import { HTTP } from '@ionic-native/http/ngx';
// import { Camera }  from '@ionic-native/camera/ngx';
//import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { AuthModule } from  './auth/auth.module';
import { FormsModule } from '@angular/forms';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';





@NgModule({
  declarations: [AppComponent, RecuperarContrasenaComponent, CrearUsuarioComponent],
  entryComponents: [RecuperarContrasenaComponent, CrearUsuarioComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, AuthModule, FormsModule],
  providers: [
     { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
