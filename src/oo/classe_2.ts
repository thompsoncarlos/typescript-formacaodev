class Curso {
  // readonly id: number | undefined;
  // public nome: string | undefined;
 
  constructor(readonly id: number, public nome?: string ) {
    this.id = id;
    if(id < 1) throw new Error('Id inválido');
  }

  // get id() {
  //   return this._id;
  // }
  
 }
 
 const c1 = new Curso(123);
//  c1.id = 123;
 c1.nome = "Iniciando com Typescript";
 console.log(c1.id);
 console.log(c1.nome);

 const c2 = new Curso(456, 'Typescript Avançado');
 console.log(c2);
 
 // Usando como um módulo
 export {}