import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirmaPage } from './firma';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { SocialSharing } from '@ionic-native/social-sharing';

@NgModule({
  declarations: [
    FirmaPage,
  ],
  imports: [
    IonicPageModule.forChild(FirmaPage),
    NgxQRCodeModule
  ],
  providers: [
    SocialSharing
  ]
})
export class FirmaPageModule {}
