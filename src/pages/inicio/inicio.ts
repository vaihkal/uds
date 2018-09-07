import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SolicitudPage } from '../solicitud/solicitud';
import { SolicitudesProvider } from '../../providers/solicitudes/solicitudes';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginPage } from '../login/login';
import { SolicitudEmpresaPage } from '../solicitud-empresa/solicitud-empresa';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {
  public validadoras: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public service: SolicitudesProvider,
    public jwtHelper: JwtHelperService,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
    this.getValidadoras();
  }

  nuevaSolicitud(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(SolicitudPage, {
      item: item
    });
  }
  getValidadoras(){
    this.service.getValidators().subscribe((res: any) => {
      this.validadoras = res.data;
    })
  }

}
