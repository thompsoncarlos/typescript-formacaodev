// String
const nome: string = "Carlos";
console.log(nome);

// Boolean
let estaChovendo: boolean;
estaChovendo = true;
console.log(estaChovendo);

// Number
let idade: number = 40;
console.log(idade);

// Any
let variavel: any = 4; // Atribuido de forma explícita
variavel = 'Texto';
variavel = false;
variavel = { nome: 'Thompson' };
console.log(variavel);

let misterio; // Atribuído de forma implícita, por inferência.
misterio = 4;
misterio = 'Texto';
console.log(misterio);