"use strict";
class Laptop {
    constructor(nombre, modelo) {
        this.nombre = nombre;
        this.encendido = false;
        this.modelo = modelo;
    }
    encender() {
        this.encendido = true;
        console.log(`${this.nombre} (${this.modelo}) ha sido encendido.`);
    }
    apagar() {
        this.encendido = false;
        console.log(`${this.nombre} (${this.modelo}) ha sido apagado.`);
    }
    abrirPrograma(programa) {
        console.log(`${this.nombre} (${this.modelo}) abrio el programa ${programa}.`);
    }
}
