import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exerc1 } from '../ListaExerc/exerc1/exerc1';
import { Exerc2 } from './exerc2/exerc2';

const routes: Routes = [
  { path: 'exerc1', component: Exerc1 }, 
  { path: 'exerc2', component: Exerc2 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaExercRoutingModule { }