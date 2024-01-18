"use strict";
class Animal {
    constructor(nombre, edad, tipo) {
        this._nombre = nombre;
        this._edad = edad;
        this._tipo = tipo;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get edad() {
        return this._edad;
    }
    set edad(edad) {
        this._edad = edad;
    }
    get tipo() {
        return this._tipo;
    }
    set tipo(tipo) {
        this._tipo = tipo;
    }
    hacerRuido() {
        console.log("Hacer ruido");
    }
}
