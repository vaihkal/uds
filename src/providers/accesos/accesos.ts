import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { webApi } from '../../variables';

/*
  Generated class for the AccesosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AccesosProvider {
  private api = webApi.accessApi;

  constructor(public http: HttpClient) {
    console.log('Hello AccesosProvider Provider');
  }
  getAccess(){
    return this.http.get(this.api);
  }
  allowAccess(id:string){
    let uri = `${this.api}aceptar/${id}`;
    return this.http.post(uri, null);
  }
  denyAccess(id:string){
    let uri = `${this.api}rechazar/${id}`;
    return this.http.post(uri, null);
  }

}
