import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { wl } from '../variables';
import { QRScanner } from '@ionic-native/qr-scanner';
import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomeCiudadanoPage } from '../pages/home-ciudadano/home-ciudadano';
import { NotificacionesPage } from '../pages/notificaciones/notificaciones';
import { AccesosPage } from '../pages/accesos/accesos';
import { ConfiguracionPage } from '../pages/configuracion/configuracion';
import { SolicitudPage } from '../pages/solicitud/solicitud';
import { ValidacionPage } from '../pages/validacion/validacion';
import { DetalleSolicitudPage } from '../pages/detalle-solicitud/detalle-solicitud';
import { DetalleActividadPage } from '../pages/detalle-actividad/detalle-actividad';
import { LoginPage } from '../pages/login/login';
import { AuthenticationProvider } from '../providers/authentication/authentication';
import { HttpClientModule } from '@angular/common/http';
import { SolicitudesProvider } from '../providers/solicitudes/solicitudes';
import { HistorialProvider } from '../providers/historial/historial';
import { NotificacionesProvider } from '../providers/notificaciones/notificaciones';
import { Firebase } from '@ionic-native/firebase';
import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FcmProvider } from '../providers/fcm/fcm';
import { Observable } from 'rxjs-compat';
import { InicioPage } from '../pages/inicio/inicio';
import { HomeValidadoraPage } from '../pages/home-validadora/home-validadora';
import { SolicitudEmpresaPage } from '../pages/solicitud-empresa/solicitud-empresa';
import { AccesosProvider } from '../providers/accesos/accesos';
import { NotificacionDetallePage } from '../pages/notificacion-detalle/notificacion-detalle';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}
export const firebaseConfig = {
    apiKey: "AIzaSyACtCVUbVVvhO5WUzKTTd1oN4IwJaXdSmg",
    authDomain: "ads-demo-5f318.firebaseapp.com",
    databaseURL: "https://ads-demo-5f318.firebaseio.com",
    projectId: "ads-demo-5f318",
    storageBucket: "ads-demo-5f318.appspot.com",
    messagingSenderId: "302611588815"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    HomeCiudadanoPage,
    HomeValidadoraPage,
    NotificacionesPage,
    AccesosPage,
    ConfiguracionPage,
    SolicitudPage,
    ValidacionPage,
    DetalleSolicitudPage,
    DetalleActividadPage,
    LoginPage,
    SolicitudEmpresaPage,
    NotificacionDetallePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: wl,
      }
    }),
    NgxQRCodeModule,
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    HomeCiudadanoPage,
    HomeValidadoraPage,
    NotificacionesPage,
    AccesosPage,
    ConfiguracionPage,
    SolicitudPage,
    ValidacionPage,
    DetalleSolicitudPage,
    DetalleActividadPage,
    LoginPage,
    SolicitudEmpresaPage,
    NotificacionDetallePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    AngularFirestore,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthenticationProvider,
    SolicitudesProvider,
    HistorialProvider,
    NotificacionesProvider,
    FcmProvider,
    QRScanner,
    Camera,
    AccesosProvider
  ]
})
export class AppModule {}
