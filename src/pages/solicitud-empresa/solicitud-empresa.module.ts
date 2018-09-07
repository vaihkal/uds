import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SolicitudEmpresaPage } from './solicitud-empresa';

@NgModule({
  declarations: [
    SolicitudEmpresaPage,
  ],
  imports: [
    IonicPageModule.forChild(SolicitudEmpresaPage),
  ],
})
export class SolicitudEmpresaPageModule {}
