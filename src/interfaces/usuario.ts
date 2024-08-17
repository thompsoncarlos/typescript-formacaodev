interface Usuario {
  id?: number;
  nome: string;
  email: string;
  senha?: string; // ? -> atributo opcional
}

const usuarioLogado: Usuario = {
  id: 123,
  nome: 'Thompson',
  email: 'thompso@zmail.com'
}

console.log(usuarioLogado.id);
console.log(usuarioLogado.nome);
console.log(usuarioLogado.email);

const usuarioOpcional: Partial<Usuario> = {
  id: 456,
  nome: 'Carlos',
  senha:'54321'
}

console.log(usuarioOpcional.id);
console.log(usuarioOpcional.nome);
console.log(usuarioOpcional.email);
console.log(usuarioOpcional.senha);

const usuarioCompleto: Required<Usuario> = {
  id: 987,
  nome: 'Eduardo',
  email: 'eduardo@zmail.com',
  senha: '9876'
}

export {}