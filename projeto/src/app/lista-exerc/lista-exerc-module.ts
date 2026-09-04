import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaExercRoutingModule } from './lista-exerc-routing-module';
import { Exerc2 } from './exerc2/exerc2';
import { Exerc3 } from './exerc3/exerc3';
import { Exerc4 } from './exerc4/exerc4';
import { Exerc5 } from './exerc5/exerc5';

@NgModule({
  declarations: [Exerc2, Exerc3, Exerc4, Exerc5],
  imports: [CommonModule, ListaExercRoutingModule],
})
export class ListaExercModule {}
