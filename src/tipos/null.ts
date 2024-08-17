type Usuario2 = { nome: string, email: string }

const usuarios: Usuario2[] = [
  { nome: 'Carlos' , email: 'carlos@zmail.com' },
  { nome: 'Thompson' , email: 'thompson@zmail.com' },
  { nome: 'Eduardo' , email: 'eduardo@zmail.com' },
]

function buscarPorEmail(email: string): Usuario2 | null {
  return usuarios.find(u => u.email === email) ?? null
}

console.log(buscarPorEmail('thompson@zmail.com'));
console.log(buscarPorEmail('cadu@zmail.com'));