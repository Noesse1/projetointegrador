import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaExercRoutingModule } from './lista-exerc-routing-module';
import { Exerc2 } from './exerc2/exerc2';

@NgModule({
  declarations: [Exerc2],
  imports: [CommonModule, ListaExercRoutingModule],
})
export class ListaExercModule {}
