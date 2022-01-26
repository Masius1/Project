/* eslint-disable no-trailing-spaces */
/* eslint-disable space-before-function-paren */
import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { ViewController } from '@ionic/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.component.html',
  styleUrls: ['./recuperar-contrasena.component.scss'],
})
export class RecuperarContrasenaComponent implements OnInit {

  form = {
    usuario: null, password: null, repeat: null
  };

  constructor(private toastCrtl: ToastController, 
      private api: ApiService, private loadingCtrl: LoadingController, private modal: ModalController ) { }

  ngOnInit() {}


  async restablecer(){
    console.log('AQUIIII');
    if(this.form.password !== this.form.repeat){
      const toast = await this.toastCrtl.create({ message: 'Las contraseñas ingresadas no son iguales.', duration: 3000 });
      return toast.present();
    }

    const loading = await this.loadingCtrl.create({ message: ''});
    loading.present();
    await this.api
      .restablecer({ usuario: this.form.usuario, password: this.form.password})
      .then(async(result: any) => {
        console.log(result);
        (await this.toastCrtl.create({ message: result.message, duration: 3000 })).present();
      });
    loading.dismiss();
    console.log(this.form);
  }

  dismiss(){
    this.modal.dismiss();
  }

}
