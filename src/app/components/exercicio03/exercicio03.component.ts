import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio03',
  templateUrl: './exercicio03.component.html',
  styleUrls: ['./exercicio03.component.scss']
})
export class Exercicio03Component implements OnInit {
  counter = 0;
  intervalId;
  botao = "Iniciar";

  constructor() { }

  ngOnInit(): void {}

  numero(){
    if(this.counter<60) this.counter++;
    else{
      clearInterval(this.intervalId);
      this.botao="Iniciar";
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

}
