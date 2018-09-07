import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { NotificacionesProvider } from '../../providers/notificaciones/notificaciones';
/**
 * Generated class for the SolicitudEmpresaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-solicitud-empresa',
  templateUrl: 'solicitud-empresa.html',
})
export class SolicitudEmpresaPage {
  public selectedItems: any[];
  private solicitudes: string[] = [];
  public firma = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private qrScanner: QRScanner, private service: NotificacionesProvider) {
    this.selectedItems = navParams.get('certificaciones');
    this.selectedItems.forEach(element => {
      if(element.solicitada) this.solicitudes.push(element.id);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SolicitudEmpresaPage');
  }

  scanQR(event){
    this.qrScanner.prepare()
    .then((status: QRScannerStatus) => {
      if (status.authorized) {
        this.qrScanner.show();
        //document.getElementById('appBody').style.opacity = '0';
        console.log(status.authorized);
        //this.qrScanner.show();
        let scanSub = this.qrScanner.scan().subscribe((text: string) => {
          //document.getElementById('appBody').style.opacity = '1';
          this.firma = text;
          //this.qrScanner.show(); // hide camera preview
          scanSub.unsubscribe(); // stop scanning
        }, error => console.log(error));
      } else if (status.denied) {
        alert('denied');
      } else {
        alert('skipped');
      }
    }, error => alert(error))
    .catch((e: any) => alert('Error is '+e));
  }
  solicitar(){
    let model = {
      idCiudadano: this.firma,
      certificaciones: this.solicitudes
    }
    this.service.solicitar(model).subscribe(res=>{
      console.log(JSON.stringify(res));
      this.cancelar();
    }, err => console.log(JSON.stringify(err)));
  }
  cancelar(){
    this.navCtrl.pop();
  }

}
