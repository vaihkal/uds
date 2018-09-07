import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { SolicitudesProvider } from '../../providers/solicitudes/solicitudes';
import { HomeCiudadanoPage } from '../home-ciudadano/home-ciudadano';

/**
 * Generated class for the ValidacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-validacion',
  templateUrl: 'validacion.html',
})
export class ValidacionPage {
  selectedItem: any;
  public validations: any = [];
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams, private service: SolicitudesProvider) {
    this.selectedItem = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ValidacionPage');
  }
  anterior(){
    this.slides.slidePrev();
  }
  validar(){
    const model = {
      idCertificacion: this.selectedItem.id,
      campos: this.selectedItem.campos
    }
    this.service.generate(model).subscribe((res: any)=>{
      if(res.result){
        this.navCtrl.setRoot(HomeCiudadanoPage);
      }
      else {
        alert(res.message);
      }
    }, error =>{
      alert(error.error.message);
    });
  }
  agregar(campo){
    if(!campo.valor || campo.valor==-1 || campo.valor.trim()=='') alert("no puede dejar el campo vacío");
    else{
      if(this.slides.isEnd()){
        this.validar();
      }
      else this.slides.slideNext();
    }
    
  }

}
