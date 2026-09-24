import { Component } from '@angular/core';

@Component({
  selector: 'app-exerc4',
  standalone: false,
  templateUrl: './exerc4.html',
  styleUrl: './exerc4.css',
})
export class Exerc4 {
  nomeProduto: string = 'Teclado';
  quantidadeEstoque: number = 5;

  adicionar() {
    this.quantidadeEstoque++;
  }

  remover() {
    if (this.quantidadeEstoque > 0) {
      this.quantidadeEstoque--;
    }
  }
}
