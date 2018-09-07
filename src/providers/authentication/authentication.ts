import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { webApi } from '../../variables';

/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {

  private api = webApi.accountApi;

  constructor(
    public http: HttpClient,
  ) {
    console.log('Hello AuthenticationProvider Provider');
  }


  loginCitizen(id: any = '2'){
    return this.http.post(this.api+"ciudadano/"+id, null);
  }
  loginInstitution(id: any = '2'){
    return this.http.post(this.api+"empresa/"+id, null);
  }
  loginValidator(id: any = '2'){
    return this.http.post(this.api+"validador/"+id, null);
  }
  solicitarNotificaciones(){
    return this.http.post(this.api+"ciudadano/solicitudes/", null);
  }
  solicitarCiudadano(){
    return this.http.get(this.api+"ciudadano/");
  }

}
