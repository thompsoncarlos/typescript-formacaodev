export function saudacao(nome: string): string {
  return `Olá ${nome}! Passar bem!` 
}

export function multiplicar(n1: number, n2: number) {
    return n1 * n2;
  }
  
  export function multiplicarPerigosa(n1:any, n2:any){
  return n1 * n2;
}

function imprimirNoConsole(): void {
  console.log('Exemplo de função')
}

imprimirNoConsole();