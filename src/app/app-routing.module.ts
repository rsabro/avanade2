import { Exercicio01Component } from './components/exercicio01/exercicio01.component';
import { ExerciciosComponent } from './components/exercicios/exercicios.component';
import { LoginComponent } from './components/layouts/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Exercicio02Component } from './components/exercicio02/exercicio02.component';
import { Exercicio03Component } from './components/exercicio03/exercicio03.component';
import { Exercicio04Component } from './components/exercicio04/exercicio04.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'exercicios', component: ExerciciosComponent },
  { path: 'exercicio01', component: Exercicio01Component },
  { path: 'exercicio02', component: Exercicio02Component },
  { path: 'exercicio03', component: Exercicio03Component },
  { path: 'exercicio04', component: Exercicio04Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
