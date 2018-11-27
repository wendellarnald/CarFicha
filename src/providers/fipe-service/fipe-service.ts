import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FipeServiceProvider {
  private apiREST = '';

  constructor(public http: HttpClient) {
    console.log('Hello FipeServiceProvider Provider');
  }

  Mark() {
    this.apiREST = 'http://fipeapi.appspot.com/api/1/carros/marcas.json';
    return this.http.get(this.apiREST)
  }

  Vehicle(Id) {
    this.apiREST = 'http://fipeapi.appspot.com/api/1/carros/veiculos/' + Id + '.json';
    return this.http.get(this.apiREST)
  }


  
}
