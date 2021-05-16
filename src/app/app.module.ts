import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { LoginComponent } from './components/layouts/login/login.component';
import { ExerciciosComponent } from './components/exercicios/exercicios.component';
import { Exercicio01Component } from './components/exercicio01/exercicio01.component';
import { Exercicio02Component } from './components/exercicio02/exercicio02.component';
import { Exercicio03Component } from './components/exercicio03/exercicio03.component';
import { Exercicio04Component } from './components/exercicio04/exercicio04.component';
import { FinalizadoComponent } from './components/finalizado/finalizado.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ExerciciosComponent,
    Exercicio01Component,
    Exercicio02Component,
    Exercicio03Component,
    Exercicio04Component,
    FinalizadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
