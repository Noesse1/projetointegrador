import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

@Component({
  selector: 'app-exerc9',
  standalone: false,
  templateUrl: './exerc9.html',
  styleUrl: './exerc9.css',
})
export class Exerc9 {
  
  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Teclado',
      preco: 120,
      quantidade: 5
    },
    {
      id: 2,
      nome: 'Mouse',
      preco: 80,
      quantidade: 0
    },
    {
      id: 3,
      nome: 'Monitor',
      preco: 900,
      quantidade: 3
    },
    {
      id: 4,
      nome: 'Headset',
      preco: 200,
      quantidade: 2
    },
    {
      id: 5,
      nome: 'Webcam',
      preco: 250,
      quantidade: 0
    }
  ];
}
