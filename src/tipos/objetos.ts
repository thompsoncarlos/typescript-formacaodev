type Usuario = { nome: string, email: string }

let usuario: Usuario = {
  nome: 'Carlos Thompson',
  email: 'ct@zmail.com'
}

// usuario.senha = '123456';
console.log(usuario.nome);
console.log(usuario.email);

usuario = {
  nome: 'Liana',
  email: 'liana@zmail.com'
}
console.log(usuario.nome);
console.log(usuario.email);