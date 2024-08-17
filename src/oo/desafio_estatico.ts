class DesafioEstatico {
  // atributo de instancia
  nota: number = 9.8; // Não alterar esta linha
  static notaEstatica: number = 7.9
  
  // metodo de class (estático)
  static executar() {
    // Imprimir o valor de nota no console
    const instancia = new DesafioEstatico();
    console.log(instancia.nota);
    console.log(DesafioEstatico.notaEstatica);
  }
}

DesafioEstatico.executar();

const outraInstancia = new DesafioEstatico();
outraInstancia.nota = 8.5;
console.log(outraInstancia.nota);