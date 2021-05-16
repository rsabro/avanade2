import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercicio01',
  templateUrl: './exercicio01.component.html',
  styleUrls: ['./exercicio01.component.scss']
})
export class Exercicio01Component implements OnInit {
  counter = 0;
  intervalId;
  botao = "Iniciar";
  bts = false;

  constructor(private router: Router) { }

  ngOnInit(): void {}

  numero(){
    if(this.counter<60) this.counter++;
    else{
      clearInterval(this.intervalId);
      this.botao="Iniciar";
      this.bts = true;
    }
  }

  iniciar(){
    if(this.botao!="Pare"){
      this.botao="Pare"
      this.intervalId = setInterval(() => {
        this.numero();
      }, 1000)
    }else{
      clearInterval(this.intervalId);
      this.botao="Iniciar";
    }
  }

  finalizado(){
    this.counter = 0;
    this.router.navigate(['/finalizado']);
  }

}

