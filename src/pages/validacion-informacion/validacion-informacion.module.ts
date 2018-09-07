import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ValidacionInformacionPage } from './validacion-informacion';

@NgModule({
  declarations: [
    ValidacionInformacionPage,
  ],
  imports: [
    IonicPageModule.forChild(ValidacionInformacionPage),
  ],
})
export class ValidacionInformacionPageModule {}
