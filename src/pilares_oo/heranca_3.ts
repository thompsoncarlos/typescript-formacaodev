interface Usuario {
  id: number,
  nome: string,
  email: string,
  senha?:string
}

interface CasoDeUso {
  executar(entrada: any): any
}

interface RegistrarUsuarioEntrada {
  usuario: Usuario,
}

class RegistrarUsuario implements CasoDeUso {
  executar(usuario: any) {
    console.log('Executando registrar usuário');
    console.log(usuario);
  }
  
}

const u1: Usuario = {
  id: 321,
  nome: 'Thompson',
  email: 'thompson@zmail.com',
  senha: '654321'
}

const casoDeUso: CasoDeUso = new RegistrarUsuario();
casoDeUso.executar(u1);

export {}