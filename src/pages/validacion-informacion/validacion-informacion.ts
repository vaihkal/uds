import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

/**
 * Generated class for the ValidacionInformacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-validacion-informacion',
  templateUrl: 'validacion-informacion.html',
})
export class ValidacionInformacionPage {

  public validations: any = [];
  @ViewChild(Slides) slides: Slides;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ValidacionInformacionPage');
  }
  /* validar(){
    const model = {
      idCertificacion: this.selectedItem.id,
      campos: this.selectedItem.campos
    }
    this.service.generate(model).subscribe((res: any)=>{
      if(res.result){
        this.navCtrl.pop();
      }
      else {
        alert(res.message);
      }
    }, error =>{
      alert(error.error.message);
    });
  }
  agregar(campo){
    
    
  } */

}
