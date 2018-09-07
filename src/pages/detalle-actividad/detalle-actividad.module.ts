import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleActividadPage } from './detalle-actividad';

@NgModule({
  declarations: [
    DetalleActividadPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleActividadPage),
  ],
})
export class DetalleActividadPageModule {}
