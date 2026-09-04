import { Component } from '@angular/core';

@Component({
  selector: 'app-exerc5',
  standalone: false,
  templateUrl: './exerc5.html',
  styleUrl: './exerc5.css',
})
export class Exerc5 {curtidas = 0; 

  
  adicionarCurtida() {   
   this.curtidas++;
   }
  }