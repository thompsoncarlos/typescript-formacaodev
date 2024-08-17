// type ContaCorrente ( numero, saldo, movimentar)
// type Cliente (nome, email, contas[])

// lista de Correntistas = []

type ContaCorrente = {
  numero: number;
  saldo: number;
  movimentar: (valor: number) => void;
};

type Cliente = {
  nome: string;
  email: string;
  contas: ContaCorrente[];
};

function movimentar(this: ContaCorrente, valor: number) {
  this.saldo += valor;
}

const clientes: Cliente[] = [
  {
    nome: "Carlos",
    email: "carlos@zmail.com",
    contas: [
      {
        numero: 1234,
        saldo: 0,
        movimentar,
      },
      {
        numero: 4567,
        saldo: 350.33,
        movimentar,
      },
    ],
  },
  {
    nome: "Thompson",
    email: "carlos@zmail.com",
    contas: [
      {
        numero: 3232,
        saldo: 670.12,
        movimentar,
      },
      {
        numero: 3000,
        saldo: 1398.89,
        movimentar,
      },
    ],
  },
];

function movimentarConta(numConta: number, valor: number) {
  const conta = clientes.map(cli => {
    return cli.contas.find(cc => cc.numero === numConta)
  }).filter(c => c)[0]
  conta?.movimentar(valor)
}

function consultarSaldo(numConta: number): number | null {
  const conta = clientes.map(cli => {
    return cli.contas.find(cc => cc.numero === numConta)
  }).filter(c => c)[0]
  return conta?.saldo ?? null
}

movimentarConta(3232, 678.80);
console.log(consultarSaldo(3232));

movimentarConta(3232, -350.80);
console.log(consultarSaldo(3232));