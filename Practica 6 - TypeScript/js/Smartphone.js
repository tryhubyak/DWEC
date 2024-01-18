"use strict";
class Smartphone {
    constructor(nombre, marca) {
        this.nombre = nombre;
        this.encendido = false;
        this.marca = marca;
    }
    encender() {
        this.encendido = true;
        console.log(`${this.nombre} (${this.marca}) ha sido encendido.`);
    }
    apagar() {
        this.encendido = false;
        console.log(`${this.nombre} (${this.marca}) ha sido apagado.`);
    }
    llamar(numero) {
        console.log(`${this.nombre} (${this.marca}) está llamando al número ${numero}.`);
    }
}
