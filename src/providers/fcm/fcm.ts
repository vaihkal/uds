import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase';
import { AngularFirestore } from 'angularfire2/firestore';
import { Platform } from 'ionic-angular';

/*
  Generated class for the FcmProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FcmProvider {

  constructor(
    public http: HttpClient,
    private firebaseNative: Firebase,
    private afs: AngularFirestore,
    private platform: Platform
  ) {
    console.log('Hello FcmProvider Provider');
  }

  async getToken(){
    let token;
    if(this.platform.is('android')){
      token = await this.firebaseNative.getToken();
      //alert(JSON.stringify(this.firebaseNative));
    }
    if(this.platform.is('ios')){
      token = await this.firebaseNative.getToken();
      const perm = await this.firebaseNative.grantPermission();
    }
    localStorage.setItem('tokenFB', token);
    return this.saveToken(token);
  }
  private saveToken(token){
    if(!token) return;
    const devicesRef = this.afs.collection('devices');
    const docData = {
      token,
      userId: 'testUser'
    }
    return devicesRef.doc(token).set(docData);
  }
  listenToNotifications(){
    return this.firebaseNative.onNotificationOpen()
  }

}
