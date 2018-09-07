import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HomeValidadoraPage } from '../home-validadora/home-validadora';

/**
 * Generated class for the HomeCiudadanoPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-ciudadano',
  templateUrl: 'home-ciudadano.html'
})
export class HomeCiudadanoPage {

  inicioRoot = 'InicioPage'
  solicitudesRoot = 'SolicitudesPage'
  historialRoot = 'HistorialPage'
  firmaRoot = 'FirmaPage'

  public rol: string = 'Ciudadano';


  constructor(public navCtrl: NavController, private jwtHelper: JwtHelperService) {
    let token = localStorage.getItem('access_token');
    this.rol = this.jwtHelper.decodeToken(token)['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    if(this.rol=='Validadora') this.navCtrl.setRoot(HomeValidadoraPage)
  }

}
