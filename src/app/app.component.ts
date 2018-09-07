import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as firebase from 'firebase';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { HomeCiudadanoPage } from '../pages/home-ciudadano/home-ciudadano';
import { NotificacionesPage } from '../pages/notificaciones/notificaciones';
import { AccesosPage } from '../pages/accesos/accesos';
import { ConfiguracionPage } from '../pages/configuracion/configuracion';
import { LoginPage } from '../pages/login/login';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthenticationProvider } from '../providers/authentication/authentication';
import { FcmProvider } from '../providers/fcm/fcm';
import { Firebase } from '@ionic-native/firebase';
import { firebaseConfig } from './app.module';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  isLoggedIn: boolean = false;
  token: any;
  perfil: any = {
    logo: '',
    nombre: '',
    autenticidad: 0
  };

  pages: Array<{icon: string, title: string, component: any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen, 
    public jwtHelper: JwtHelperService,
    private service: AuthenticationProvider,
    private fcm: FcmProvider,
    private fb: Firebase,
    private af: AngularFireStorage
  ) {
    this.token = localStorage.getItem('access_token');
    if(localStorage.getItem('datos')) this.perfil = JSON.parse(localStorage.getItem('datos'));
    // used for an example of ngFor and navigation
    this.pages = [
      { icon:'home', title: 'Inicio', component: HomeCiudadanoPage },
      { icon:'notifications', title: 'Notificaciones', component: NotificacionesPage },
      { icon:'key', title: 'Accesos', component: AccesosPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      //alert(JSON.stringify(this.fb));
      /* this.fcm.getToken().then(res=>{
        console.log(res);
      }).catch(err=>console.log(err)); */
      console.log("Iniciando app...");
      this.fcm.getToken().then(token =>{
        console.log("Iniciando firebase...");
      }).catch(err=> console.log(err));
      // Listen to incoming messages
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
    });
    if(this.jwtHelper.isTokenExpired(this.token)) this.nav.setRoot(LoginPage);
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(this.jwtHelper.isTokenExpired(this.token)) this.nav.setRoot(LoginPage);
    else this.nav.setRoot(page.component);
  }
  logout(){
    localStorage.removeItem('access_token');
    this.nav.setRoot(LoginPage);
  }
}
