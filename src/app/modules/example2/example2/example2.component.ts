import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.scss']
})
export class Example2Component implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com/400/200/nature/';

  valorAtual: string = '';
  valorSalvo: string = '';
  nomeDoCurso: string = 'Angular';
  isMouseOver: boolean = false;
  nome: string = 'abc';
  pessoa: any = {
    nome: 'Fernando', 
    idade: 35,
    endereco: {
      rua: 'joaquim bezerra',
      numero: 184,
      cidade: 'Aliança',
      bairro: 'centro',
      estado: 'Pernambuco'
    },
    telefone: 81999307312,
    cpf: '06848578479'
  }

  botaoClicado() {
    alert('Botão clicado!');
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  constructor() { }

  ngOnInit() {
  }

}
