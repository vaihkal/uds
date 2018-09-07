import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { webApi } from '../../variables';

/*
  Generated class for the NotificacionesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NotificacionesProvider {
  private api = webApi.notificationsApi;

  constructor(public http: HttpClient) {
    console.log('Hello NotificacionesProvider Provider');
  }
  getNotifications(){
    return this.http.get(this.api);
  }
  solicitar(model: any){
    return this.http.post(this.api+"solicitar/", model);
  }
  aceptar(id: any){
    return this.http.post(this.api + id +"/aceptar/", null);
  }
  rechazar(id: any){
    return this.http.post(this.api + id +"/rechazar/", null);
  }

}
