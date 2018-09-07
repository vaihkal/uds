import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SolicitudesProvider } from '../../providers/solicitudes/solicitudes';

/**
 * Generated class for the HomeValidadoraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-validadora',
  templateUrl: 'home-validadora.html',
})
export class HomeValidadoraPage {
  public solicitudes: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private service: SolicitudesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeValidadoraPage');
    this.getSolicitudes();
  }
  validar(solicitud){

  }
  getSolicitudes(){
    this.service.getRequests().subscribe((res: any)=>{
      if(res.result){
        this.solicitudes = res.data.data;
      }
    })
  }

}
