import {Routes} from '@angular/router'

import {ContentComponent} from './content/content.component'
import {CadastroComponent} from './cadastro/cadastro.component'
import {LoginComponent} from './login/login.component'
import {PedidosComponent} from './pedidos/pedidos.component'
import {CppComponent} from './cpp/cpp.component'


export const ROUTES: Routes =[

  {path: '', component: ContentComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'login', component: LoginComponent },
  {path: 'pedidos', component: PedidosComponent },
  {path: 'cpp', component: CppComponent }

]
