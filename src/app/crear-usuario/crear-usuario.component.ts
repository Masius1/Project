/* eslint-disable no-trailing-spaces */
/* eslint-disable space-before-function-paren */
import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss'],
})
export class CrearUsuarioComponent implements OnInit {
  form = {
    rut: null, usuario: null, password: null
  };
  constructor(private api: ApiService, 
    private toastCtrl: ToastController, private loading: LoadingController, private modalCtrl: ModalController) { }

  ngOnInit() {}


  async crearUsuario(){
    console.log(this.form);
    if(!this.form.rut || !this.form.usuario || !this.form.password){
      const toast = await this.toastCtrl.create({ message: 'Campos incompletos!', duration: 3000 });
      return toast.present();
    }

    const usuario = {
      rut: this.form.rut,
      usuario: this.form.usuario,
      password: this.form.password
    };

    const loading = await this.loading.create({ });
    loading.present();
    await this.api.crearUsuario(usuario)
      .then(async(result: any) => {
        (await this.toastCtrl.create({ message: result.message, duration: 3000 })).present();
      });
    loading.dismiss();

  }


  dismiss(){
    this.modalCtrl.dismiss();
  }

}
