import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListaExercRoutingModule } from './lista-exerc-routing-module';
import { Exerc2 } from './exerc2/exerc2';
import { Exerc3 } from './exerc3/exerc3';
import { Exerc4 } from './exerc4/exerc4';
import { Exerc5 } from './exerc5/exerc5';
import { Exerc6 } from './exerc6/exerc6';
import { Exerc8 } from './exerc8/exerc8';
import { Exerc9 } from './exerc9/exerc9';
import { Exerc10 } from './exerc10/exerc10';

@NgModule({
  declarations: [Exerc2, Exerc3, Exerc4, Exerc5, Exerc6, Exerc8, Exerc9, Exerc10],
  imports: [CommonModule, ListaExercRoutingModule, FormsModule],
})
export class ListaExercModule {}
