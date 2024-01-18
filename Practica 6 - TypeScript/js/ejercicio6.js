"use strict";
class Almacen {
    constructor() {
        this.elementos = [];
    }
    agregarElemento(elemento) {
        this.elementos.push(elemento);
        console.log(`Elemento agregado al almacén: ${elemento}`);
    }
    obtenerElemento(posicion) {
        if (posicion >= 0 && posicion < this.elementos.length) {
            return this.elementos[posicion];
        }
        else {
            console.log(`Posición ${posicion} fuera de rango.`);
            return undefined;
        }
    }
    listarElementos() {
        console.log("Elementos almacenados:");
        this.elementos.forEach((elemento, index) => {
            console.log(`[${index}] ${elemento}`);
        });
    }
}
const almacenNumeros = new Almacen();
almacenNumeros.agregarElemento(54);
almacenNumeros.agregarElemento(3245);
almacenNumeros.agregarElemento(253123);
almacenNumeros.listarElementos();
console.log("Elemento obtenido:", almacenNumeros.obtenerElemento(0));
const almacenCadenas = new Almacen();
almacenCadenas.agregarElemento("Veronika");
almacenCadenas.agregarElemento("Maria");
almacenCadenas.listarElementos();
console.log("Elemento obtenido:", almacenCadenas.obtenerElemento(1));
