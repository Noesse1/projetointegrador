import { Component } from '@angular/core';

@Component({
  selector: 'app-exerc6',
  standalone: false,
  templateUrl: './exerc6.html',
  styleUrl: './exerc6.css',
})
export class Exerc6 {
  quantidade = 0;

  incrementar() {
    this.quantidade++;
  }

  decrementar() {
    
    if (this.quantidade > 0) {
      this.quantidade--;
    }
  }
}
