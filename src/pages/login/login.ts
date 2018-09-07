import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { JwtHelperService } from '@auth0/angular-jwt';
import { InicioPage } from '../inicio/inicio';
import { HomeCiudadanoPage } from '../home-ciudadano/home-ciudadano';
import { HomeValidadoraPage } from '../home-validadora/home-validadora';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
     private accountService: AuthenticationProvider, 
     public jwtHelper: JwtHelperService
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    if(!this.jwtHelper.isTokenExpired(localStorage.getItem('access_token'))) this.navCtrl.setRoot(HomeCiudadanoPage);
  }
  login(id){
    this.accountService.loginCitizen(id).subscribe((res: any)=>{
      console.log(res);
      if(res.result){
        localStorage.setItem('access_token', res.data.jwt);
        localStorage.setItem('datos', JSON.stringify(res.data));
        this.navCtrl.setRoot(HomeCiudadanoPage);
      }
    })
  }
  loginEmpresa(id){
    this.accountService.loginInstitution(id).subscribe((res: any)=>{
      console.log(res);
      if(res.result){
        localStorage.setItem('access_token', res.data.jwt);
        localStorage.setItem('datos', JSON.stringify(res.data));
        this.navCtrl.setRoot(HomeCiudadanoPage);
      }
    })
  }
  loginValidadora(id){
    this.accountService.loginValidator(id).subscribe((res: any)=>{
      console.log(res);
      if(res.result){
        localStorage.setItem('access_token', res.data.jwt);
        localStorage.setItem('datos', JSON.stringify(res.data));
        this.navCtrl.setRoot(HomeValidadoraPage);
      }
    })
  }

}