import { Component, OnInit } from '@angular/core';

import { pedido } from  '../pedido/pedido.model'
import { pedidoService } from  './pedidos.service'


@Component({
  selector: 'mt-pedidos',
  templateUrl: './pedidos.component.html'
})
export class PedidosComponent implements OnInit {

  pedidos : pedido[]

//Declaração dos Servicos
  constructor(private pedidoService: pedidoService) { }

// Clico de vida de injectable
  ngOnInit() {

    this.pedidoService.pedido()
      .subscribe(pedidos => this.pedidos = pedidos)

  }

}
