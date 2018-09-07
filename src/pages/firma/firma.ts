import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Firebase } from '@ionic-native/firebase';
import { firebaseConfig } from '../../variables';
import { FcmProvider } from '../../providers/fcm/fcm';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
/**
 * Generated class for the FirmaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-firma',
  templateUrl: 'firma.html',
})
export class FirmaPage {
  private token: any;
  public firma = "1234567890";
  public solicitar: boolean = false;
  public firebaseToken: any = "---";
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public actionSheetCtrl: ActionSheetController,
    private socialSharing: SocialSharing,
    public jwtHelper: JwtHelperService,
    private firebase: FcmProvider,
    private service: AuthenticationProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirmaPage');
    
    this.token = localStorage.getItem('access_token');
    this.firma = this.jwtHelper.decodeToken(this.token).id;
    this.solicitar = JSON.parse(localStorage.getItem('datos')).solicitudesHabilitadas;
    this.firebaseToken = localStorage.getItem('tokenFB');
  }
  compartir() {
    this.socialSharing.share(this.firma).then(res => {
      // Sharing via email is possible}
      console.log(res);
      
    }).catch(err => {
      // Sharing via email is not possible
      console.log(err);
      
    });
  }
  getNotifications(){
    this.service.solicitarNotificaciones().subscribe((res:any)=>{
      if(res.result){
        this.service.solicitarCiudadano().subscribe((dat: any)=>{
          localStorage.setItem('datos', JSON.stringify(dat.data));
          this.ionViewDidLoad();
        })
      }
    })
  }

}
