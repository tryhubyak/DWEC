"use strict";
class Employee {
    constructor(nombre, apellido, edad, fechaInicio, fechaFin, profesion) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._fechaInicio = fechaInicio;
        this._fechaFin = fechaFin;
        this._profesion = profesion;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get apellido() {
        return this._apellido;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }
    get edad() {
        return this._edad;
    }
    set edad(edad) {
        this._edad = edad;
    }
    get fechaInicio() {
        return this._fechaInicio;
    }
    set fechaInicio(fechaInicio) {
        this._fechaInicio = fechaInicio;
    }
    get fechaFin() {
        return this._fechaFin;
    }
    set fechaFin(fechaFin) {
        this._fechaFin = fechaFin;
    }
    get profesion() {
        return this._profesion;
    }
    set profesion(profesion) {
        this._profesion = profesion;
    }
}
const empleado1 = new Employee("Veronika", "Tryhubyak", 21, new Date("2024-03-18"), new Date("2024-06-25"), "Desarrolladora Junior");
const empleado2 = new Employee("Maria", "Millan", 26, new Date("2023-01-01"), null, "Profesora");
console.log(`Empleado 1 - Nombre: ${empleado1.nombre}, Edad: ${empleado1.edad}`);
console.log(`Empleado 2 - Nombre: ${empleado2.nombre}, Edad: ${empleado2.edad}`);
