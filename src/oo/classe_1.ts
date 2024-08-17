class Curso {
 private _id: number | undefined;
 public nome: string | undefined;

 get id() { 
  return this._id;
 } 

 set id(id: number | undefined) {
  if((id ?? 0) > 0) {
    this._id = id
  }
 }
}

const c1 = new Curso();
c1.id = -123; // Na validacao nao permite alterar o valor negativo
c1.id = 123;
c1.nome = "Iniciando com Typescript";
console.log(c1.id);
console.log(c1.nome);

// Usando como um módulo
export {}