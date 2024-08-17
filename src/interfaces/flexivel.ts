interface Flexivel {
  nome:string;
  [atrib: string]: any // permite flexibilizar e inserir qualquer atributo e de qualquer tipo
}

const f1: Flexivel = {
  nome: 'Teste',
  idade: 52,
  salario: 12345,
  depx: [{}]
}

console.log(f1.nome);

export {}