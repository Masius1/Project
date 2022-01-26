/* eslint-disable no-trailing-spaces */
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable eqeqeq */
/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { CrearUsuarioComponent } from '../crear-usuario/crear-usuario.component';
import { RecuperarContrasenaComponent } from '../recuperar-contrasena/recuperar-contrasena.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public usuarios = [
    { usuario: 'alumno', password: '12345', rol: 'ALUMNO' },
    { usuario: 'alumno2', password: '1234', rol: 'ALUMNO' },
    { usuario: 'profesor', password: '1234', rol: 'PROFESOR'}
  ];

  constructor(
      private api: ApiService, 
      private router: Router,
      private loadingCtrl: LoadingController,
      private modalCtrl: ModalController,
      private toast: ToastController) { }

  ngOnInit() { }


  async onLogin(form: any) {
    const usuarioLogin = form.form.value;
    const loading = await this.loadingCtrl.create({ message: 'Realizando login' });
    loading.present();

    await this.api
      .login({usuario: usuarioLogin.usuario, password: usuarioLogin.password })
      .then(async (result: any) => {
        if(!result.success){
          const _toast = await this.toast.create({ message: 'Usuario no valido', duration: 3000, position: 'top' });
          return _toast.present();
        }

        console.log('OK');
        this.router.navigateByUrl('/home');
      });

    loading.dismiss();
  }


  async changePassword(){
    const modal = await this.modalCtrl.create({ component: RecuperarContrasenaComponent });
    modal.present();
  }

  async crearUsuario(){
    const modal = await this.modalCtrl.create({ component: CrearUsuarioComponent });
    modal.present();
  }

}
