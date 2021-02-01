import { Component, OnInit } from '@angular/core';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  selectedValues: string[] = ['val1', 'val2'];

  //  output-property
  valorInicial: number = 15;
  valor: number = 5;

  // ciclo de vida
  deletarCiclo: boolean = false;
  nomeCiclo: string = 'fernando pedro'

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com/400/200/nature/';

  valorAtual: string = '';
  valorSalvo: string = '';
  nomeDoCurso: string = 'Angular';
  nomeDoProfessor: string = 'Loiane';
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

  onMouseOverOut() {
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

  onMudouValor(evento) {
    console.log(evento.novoValor);
  }

  mudarValor(){
    this.valor++;
  }
  destruirCiclo(){
    this.deletarCiclo = true;
  }

}
