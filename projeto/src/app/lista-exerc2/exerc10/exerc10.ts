import { Component } from '@angular/core';

@Component({
  selector: 'app-exerc10',
  standalone: false,
  templateUrl: './exerc10.html',
  styleUrl: './exerc10.css',
})
export class Exerc10 {
  
  emPromocao: boolean = false;

  nomeProduto: string = 'Teclado';

  precoNormal: number = 120;

  precoPromocional: number = 90;

  alternarPromocao() {
    this.emPromocao = !this.emPromocao;
  }
}
