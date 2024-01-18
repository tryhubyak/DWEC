"use strict";
class Perro extends Animal {
    constructor(nombre, edad, raza) {
        super(nombre, edad, "Perro");
        this._raza = raza;
    }
    get raza() {
        return this._raza;
    }
    set raza(raza) {
        this._raza = raza;
    }
    hacerRuido() {
        console.log("Ruidos de perro");
    }
    jugar() {
        console.log(`${this.nombre} está jugando.`);
    }
}
class Pajaro extends Animal {
    constructor(nombre, edad, especie) {
        super(nombre, edad, "Pájaro");
        this._especie = especie;
    }
    get especie() {
        return this._especie;
    }
    set especie(especie) {
        this._especie = especie;
    }
    hacerRuido() {
        console.log("Ruidos de pajaro");
    }
    volar() {
        console.log(`${this.nombre} está volando.`);
    }
}
class Gato extends Animal {
    constructor(nombre, edad, pelaje) {
        super(nombre, edad, "Gato");
        this._pelaje = pelaje;
    }
    get pelaje() {
        return this._pelaje;
    }
    set pelaje(pelaje) {
        this._pelaje = pelaje;
    }
    hacerRuido() {
        console.log("Miau");
    }
    arañar() {
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
