  class Perro extends Animal {
    private _raza: string;
  
    constructor(nombre: string, edad: number, raza: string) {
      super(nombre, edad, "Perro");
      this._raza = raza;
    }
  
    get raza(): string {
      return this._raza;
    }
  
    set raza(raza: string) {
      this._raza = raza;
    }
  
    hacerRuido(): void {
      console.log("Ruidos de perro");
    }
  
    jugar(): void {
      console.log(`${this.nombre} está jugando.`);
    }
  }


  class Pajaro extends Animal {
    private _especie: string;
  
    constructor(nombre: string, edad: number, especie: string) {
      super(nombre, edad, "Pájaro");
      this._especie = especie;
    }
  
    get especie(): string {
      return this._especie;
    }
  
    set especie(especie: string) {
      this._especie = especie;
    }
  
    hacerRuido(): void {
      console.log("Ruidos de pajaro");
    }
  
    volar(): void {
      console.log(`${this.nombre} está volando.`);
    }
  }

  class Gato extends Animal {
    private _pelaje: string;
  
    constructor(nombre: string, edad: number, pelaje: string) {
      super(nombre, edad, "Gato");
      this._pelaje = pelaje;
    }
  
    get pelaje(): string {
      return this._pelaje;
    }
  
    set pelaje(pelaje: string) {
      this._pelaje = pelaje;
    }
  
    hacerRuido(): void {
      console.log("Miau");
    }
  
    arañar(): void {
      console.log(`${this.nombre} está arañando.`);
    }
  }

const miPerro = new Perro("Firulais", 5, "Callejero");
miPerro.hacerRuido(); 
miPerro.jugar();
  
const miPajaro = new Pajaro("Mango", 2, "Inseparable");
miPajaro.hacerRuido(); 
miPajaro.volar(); 

const miGato = new Gato("Misifu", 7, "Naranja");
miGato.hacerRuido();
miGato.arañar();
  