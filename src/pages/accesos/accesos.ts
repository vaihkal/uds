import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccesosProvider } from '../../providers/accesos/accesos';

/**
 * Generated class for the AccesosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accesos',
  templateUrl: 'accesos.html',
})
export class AccesosPage {
  public accesos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private service: AccesosProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccesosPage');
    this.getAccesos();
  }
  getAccesos(){
    this.service.getAccess().subscribe((res: any)=>{
      if(res.result){
        this.accesos = res.data.data;
      }
    })
  }
  permitir(acceso){
    console.log(acceso);
    
    if(!acceso.permitirAcceso){
      this.service.allowAccess(acceso.idEmpresa).subscribe(res=>{
        console.log('allow');
        
      })
    }
    else{
      this.service.denyAccess(acceso.idEmpresa).subscribe(res=>{
        console.log('deny');
        
      })
    }
  }

}
