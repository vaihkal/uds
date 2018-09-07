import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalleActividadPage } from '../detalle-actividad/detalle-actividad';
import { HistorialProvider } from '../../providers/historial/historial';

/**
 * Generated class for the HistorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historial',
  templateUrl: 'historial.html',
})
export class HistorialPage {

  public historial: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private service: HistorialProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistorialPage');
    this.getHistorial();
  }
  verActividad(event, actividad){
    this.navCtrl.push(DetalleActividadPage, {
      item: actividad
    });
  }
  getHistorial(){
    this.service.getHistorical().subscribe((res: any)=>{
      if(res.result) this.historial = res.data.data;
    });
  }

}
