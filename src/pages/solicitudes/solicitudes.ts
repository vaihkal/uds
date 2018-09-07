import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalleSolicitudPage } from '../detalle-solicitud/detalle-solicitud';
import { InicioPage } from '../inicio/inicio';
import { SolicitudesProvider } from '../../providers/solicitudes/solicitudes';

/**
 * Generated class for the SolicitudesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-solicitudes',
  templateUrl: 'solicitudes.html',
})
export class SolicitudesPage {

  public solicitudes: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private service: SolicitudesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SolicitudesPage');
    this.getSolicitudes();
  }
  verSolicitud(event, solicitud){
    this.navCtrl.push(DetalleSolicitudPage, {
      item: solicitud
    });
  }
  nuevaSolicitud(event){
    this.navCtrl.push(InicioPage);
  }
  getSolicitudes(){
    this.service.getRequests().subscribe((res: any)=>{
      if(res.result) this.solicitudes = res.data.data;
      else this.solicitudes = [];
    })
  }

}
