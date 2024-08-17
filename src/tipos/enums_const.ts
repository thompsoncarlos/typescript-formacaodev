const Erros = {
  NOME_NULO: 'NOME_NULO',
  EMAIL_NAO_ENCONTRADO: 'EMAIL_NAO_ENCONTRADO',
  URL_INVALIDA: 'URL_INVALIDA'
} as const

let erro: string;
erro = Erros.NOME_NULO;
erro = 'cpf_invalido'

// VendaStatus.INICIADA = '123';

console.log(Erros.NOME_NULO);