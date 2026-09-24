import { Component } from '@angular/core';

@Component({
  selector: 'app-exerc3',
  standalone: false,
  templateUrl: './exerc3.html',
  styleUrl: './exerc3.css',
})
export class Exerc3 { 
  idade: number = 0;

  aumentarIdade() {
    this.idade++;
  }

  diminuirIdade() {
    if (this.idade > 0) {
      this.idade--;
    }
  }
}
