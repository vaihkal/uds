import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { webApi } from '../../variables';

/*
  Generated class for the SolicitudesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SolicitudesProvider {
  private api = webApi.requestsApi;

  constructor(public http: HttpClient) {
    console.log('Hello SolicitudesProvider Provider');
  }
  getValidators(){
    return this.http.get(this.api+"validadoras/");
  }
  getRequests(){
    return this.http.get(this.api);
  }
  generate(model: any){
    return this.http.post(this.api+"generar/", model);
  }

}
