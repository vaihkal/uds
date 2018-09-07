import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotificacionesProvider } from '../../providers/notificaciones/notificaciones';

/**
 * Generated class for the NotificacionDetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notificacion-detalle',
  templateUrl: 'notificacion-detalle.html',
})
export class NotificacionDetallePage {
  public selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private service: NotificacionesProvider) {
    this.selectedItem = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificacionDetallePage');
  }
  aceptar(id){
      this.service.aceptar(id).subscribe(res=>{
        console.log('allow');
        this.navCtrl.pop();
      });
  }
  rechazar(id){
      this.service.rechazar(id).subscribe(res=>{
        console.log('deny');
        this.navCtrl.pop();
      });
  }

}
