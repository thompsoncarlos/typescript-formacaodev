interface Entidade {
  id: string
}

interface EntidadeComDatas extends Entidade {
  criadoEm?: Date; // createAt
  atualizadoEm?: Date; // updateAt
  excluidoEm?: Date; // deleteAt
}

interface Usuario extends EntidadeComDatas {
  nome: string;
  email: string;
  senha?: string;
}

const u1: Usuario = {
  id: 'qjekwqelkwe-qowiuewqoijoie-qljweqwjeljqwe',
  nome: 'Thompson',
  email: 'thompson@zmail.com',
  criadoEm: new Date(),
  atualizadoEm: new Date(),
  excluidoEm: new Date()
}

// Exemplo de produto

interface Vendavel {
  preco: number;
  desconto: number;
}

interface Produto extends EntidadeComDatas, Vendavel {

}

const p1: Produto = {
  id: 'asdfasdfasdf-asdfasdfasd',
  preco: 1000,
  desconto: 0.05,
  criadoEm: new Date(),
}

console.log(u1); 
console.log(p1); 

export {}