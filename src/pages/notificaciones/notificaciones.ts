import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotificacionesProvider } from '../../providers/notificaciones/notificaciones';
import { NotificacionDetallePage } from '../notificacion-detalle/notificacion-detalle';

/**
 * Generated class for the NotificacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notificaciones',
  templateUrl: 'notificaciones.html',
})
export class NotificacionesPage {
  public notifications: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private service: NotificacionesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificacionesPage');
    this.getNotifications();
  }
  getNotifications(){
    this.service.getNotifications().subscribe((res: any)=>{
      if(res.result) this.notifications = res.data.data;
    })
  }
  aceptar(acceso){
      this.service.aceptar(acceso.idNotificacion).subscribe(res=>{
        console.log('allow');
        this.getNotifications();
      });
  }
  rechazar(acceso){
      this.service.rechazar(acceso.idNotificacion).subscribe(res=>{
        console.log('allow');
        this.getNotifications();
      });
  }
  info(acceso){
      this.navCtrl.push(NotificacionDetallePage, {
        item: acceso
      })
  }

}
