import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { webApi } from '../../variables';

/*
  Generated class for the HistorialProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HistorialProvider {
  private api = webApi.historicalApi;

  constructor(public http: HttpClient) {
    console.log('Hello HistorialProvider Provider');
  }
  getHistorical(){
    return this.http.get(this.api);
  }

}
