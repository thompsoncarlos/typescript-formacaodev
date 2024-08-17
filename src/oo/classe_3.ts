// Produto (id (valido), nome ( 2 - 250), preco ( > 0), desc (0 - 0.8), precoFinal)

import Validador from "./validador";

class Produto {
  constructor(
    readonly id: number, 
    readonly nome: string,
    readonly preco: number, 
    readonly desc: number = 0,
  ){
    Validador.maiorQueZero(id, 'Id inválido');
    Validador.tamanhoEntre(nome, 3, 250, 'Nome Inválido');
    Validador.maiorQueZero(preco, 'Preçi Inválido');
    Validador.entre(desc, 0, 0.8, 'Desconto Inválido.');
    // if(id <= 0) throw new Error('Id inválido');
    // if(nome.length < 2) throw new Error('Nome pequeno');
    // if(nome.length > 250) throw new Error('Nome grande');
    // if(preco <= 0) throw new Error('Preco inválido');
    // if(desc < 0 || desc > 0.8) throw new Error('Desconto invalido')
  }

  get precoFinal() {
    return this.preco * (1 - this.desc);
  }
}

const p1 = new Produto(1, 'Caneta', 12.5, 0.1);
console.log(p1.nome, p1.precoFinal);

const p2 = new Produto(2, 'Notebook', 1250.5);
console.log(p2.nome, p2.preco);

console.log(Validador.ERRO_DESCONHECIDO);

export {}