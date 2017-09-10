import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import {pedido} from '../pedido/pedido.model'
import { APP_API } from '../app.api'

import { ErrorHandler } from '../error-handler'

@Injectable()
export class pedidoService{

  constructor(private http: Http){}

  pedido(): Observable<pedido[]>{

    return this.http.get(`${APP_API}/restaurants`)
      .map(response => response.json())
      //.catch(ErrorHandler.handleError)
  }
}
