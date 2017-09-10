import { Component, OnInit, Input } from '@angular/core';

import {pedido} from './pedido.model'

@Component({
  selector: 'mt-pedido',
  templateUrl: './pedido.component.html'
})
export class PedidoComponent implements OnInit {

  constructor() {}

  @Input() pedido : pedido

  ngOnInit() {
  }

}
