import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ValidacionPage } from '../validacion/validacion';
import { SolicitudEmpresaPage } from '../solicitud-empresa/solicitud-empresa';
import { JwtHelperService } from '@auth0/angular-jwt';

/**
 * Generated class for the SolicitudPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-solicitud',
  templateUrl: 'solicitud.html',
})
export class SolicitudPage {
  selectedItem: any;
  public validaciones = [
    {name: 'Cédula Profesional'},
    {name: 'Certificado de Primaria'},
    {name: 'Certificado de Secundaria'},
    {name: 'Título Licenciatura'},
    {name: 'Título Maestría'},
  ]
  public rol = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private jwtHelper: JwtHelperService) {
    this.selectedItem = navParams.get('item');
    let token = localStorage.getItem('access_token');
    this.rol = this.jwtHelper.decodeToken(token)['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SolicitudPage');
  }

  nuevaValidacion(event, item) {
    this.navCtrl.push(ValidacionPage, {
      item: item
    });
  }
  nuevaSolicitudEmpresa(event) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(SolicitudEmpresaPage, {
      certificaciones: this.selectedItem.certificaciones
    });
  }
}
