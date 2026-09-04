import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaExercRoutingModule } from './lista-exerc-routing-module';
import { Exerc2 } from './exerc2/exerc2';
import { Exerc3 } from './exerc3/exerc3';

@NgModule({
  declarations: [Exerc2, Exerc3],
  imports: [CommonModule, ListaExercRoutingModule],
})
export class ListaExercModule {}
