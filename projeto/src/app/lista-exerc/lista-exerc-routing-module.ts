import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exerc1Component } from './exerc1/exerc1.component'; 

const routes: Routes = [
  { path: 'exerc1', component: Exerc1Component } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaExercRoutingModule { }