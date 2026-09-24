import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaExerc2RoutingModule } from './lista-exerc2-routing-module';
import { Exerc1 } from './exerc1/exerc1';
import { Exerc2 } from './exerc2/exerc2';

@NgModule({
  declarations: [Exerc1, Exerc2],
  imports: [CommonModule, ListaExerc2RoutingModule],
})
export class ListaExerc2Module {}
