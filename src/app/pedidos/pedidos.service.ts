import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import {pedido} from '../pedido/pedido.model'

import { APP_API } from '../app.api'

@Injectable()
export class pedidoService{
  /*

  peds: pedido[] = [

    {
      id : "10150",
      nome : "Rafael Nonato",
      cpf : "333.458.987-00",
      marca : "Brastemp",
      valor : "1500,00",
      imgpath : "assets/img/restaurants/tasty.png"
    },

    {
      id : "13500",
      nome : "Ricardo Nonato",
      cpf : "333.458.000-00",
      marca : "Nespresso",
      valor : "R$ 250,00",
      imgpath : "assets/img/restaurants/greenfood.png"
    },

    {
      id : "13500",
      nome : "Ricardo Nonato",
      cpf : "333.458.000-00",
      marca : "Nespresso",
      valor : "R$ 250,00",
      imgpath : "assets/img/restaurants/greenfood.png"
    },

    {
      id : "13500",
      nome : "Ricardo Nonato",
      cpf : "333.458.000-00",
      marca : "Nespresso",
      valor : "R$ 250,00",
      imgpath : "assets/img/restaurants/greenfood.png"
    }
  ] */

  constructor(private http: Http){}

  pedido(): Observable<pedido[]>{

    return this.http.get(`${APP_API}/restaurants`)
      .map(response => response.json())

  }
}
