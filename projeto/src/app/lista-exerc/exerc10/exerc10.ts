import { Component } from '@angular/core';

@Component({
  selector: 'app-exerc10',
  standalone: false,
  templateUrl: './exerc10.html',
  styleUrl: './exerc10.css',
})
export class Exerc10 {
 
  usuario = '';
  senha = '';
  
  
  mensagemBoasVindas = '';

  entrar() {
   
    this.mensagemBoasVindas = 'Bem-vindo, ' + this.usuario + '!';
  }
}