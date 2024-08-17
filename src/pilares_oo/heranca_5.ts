abstract class Celular {
  ligar() {
    console.log("Em ligação");
  }

  abstract acessarRedeMovel():void;
}

class IPhone23Pro extends Celular { 
  acessarRedeMovel(): void {
      console.log('Usando rede 7.5G');
  }
 }
class GalaxyS57Ultra extends Celular {
  acessarRedeMovel(): void {
      console.log('Usando rede 12G')
  }
 }

let c1 = new GalaxyS57Ultra();
c1.ligar();

c1 = new IPhone23Pro();
c1.ligar();

export {}