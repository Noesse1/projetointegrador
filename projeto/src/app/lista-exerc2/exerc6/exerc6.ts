import { Component } from '@angular/core';

@Component({
  selector: 'app-exerc6',
  standalone: false,
  templateUrl: './exerc6.html',
  styleUrl: './exerc6.css',
})
export class Exerc6 {
  
  nomes: string[] = [
    'Ana',
    'Carlos',
    'Maria',
    'João',
    'Beatriz'
  ];

  listaInicial: string[] = [
    'Ana',
    'Carlos',
    'Maria',
    'João',
    'Beatriz'
  ];

  removerUltimo() {
    this.nomes.pop();
  }

  limparLista() {
    this.nomes = [];
  }

  restaurarLista() {
    this.nomes = [...this.listaInicial];
  }
}
