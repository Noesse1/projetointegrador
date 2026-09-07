import { Component } from '@angular/core';

@Component({
  selector: 'app-exerc11',
  standalone: false,
  templateUrl: './exerc11.html',
  styleUrl: './exerc11.css',
})
export class Exerc11 {
  
  produto = 'Mouse Gamer';
  preco = 120.00;
  

  quantidade = 1;
  
  mensagem = '';

  aumentar() {
    this.quantidade++;
  }

  diminuir() {
    
    if (this.quantidade > 1) {
      this.quantidade--;
    }
  }

  adicionarAoCarrinho() {
    
    this.mensagem = 'Adicionado ' + this.quantidade + 'x ' + this.produto + ' ao carrinho!';
  }
}
