import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeCiudadanoPage } from './home-ciudadano';

@NgModule({
  declarations: [
    HomeCiudadanoPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeCiudadanoPage),
  ]
})
export class HomeCiudadanoPageModule {}
