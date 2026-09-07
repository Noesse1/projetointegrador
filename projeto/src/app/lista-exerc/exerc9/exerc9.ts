import { Component } from '@angular/core';

@Component({
  selector: 'app-exerc9',
  standalone: false,
  templateUrl: './exerc9.html',
  styleUrl: './exerc9.css',
})
export class Exerc9 {
  
  nomeProduto = 'Teclado Mecânico'; 
  
  
  estoque = 0;

  aumentar() {
    this.estoque++;
  }

  diminuir() {
    
    if (this.estoque > 0) {
      this.estoque--;
    }
  }
}
