import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Exerc1 } from './ListaExerc/exerc1/exerc1';
import { Exerc7 } from './ListaExerc/exerc7/exerc7';

@NgModule({
  declarations: [App, Exerc1, Exerc7],
  imports: [BrowserModule, AppRoutingModule,
    FormsModule
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
