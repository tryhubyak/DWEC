    class Employee {
        private _nombre: string;
        private _apellido: string;
        private _edad: number;
        private _fechaInicio: Date;
        private _fechaFin: Date | null;
        private _profesion: string;

        constructor(nombre: string, apellido: string, edad: number, fechaInicio: Date, fechaFin: Date | null, profesion: string) {
            this._nombre = nombre;
            this._apellido = apellido;
            this._edad = edad;
            this._fechaInicio = fechaInicio;
            this._fechaFin = fechaFin;
            this._profesion = profesion;
        }

        get nombre(): string {
            return this._nombre;
        }

        set nombre(nombre: string) {
            this._nombre = nombre;
        }

        get apellido(): string {
            return this._apellido;
        }

        set apellido(apellido: string) {
            this._apellido = apellido;
        }

        get edad(): number {
            return this._edad;
        }

        set edad(edad: number) {
            this._edad = edad;
        }

        get fechaInicio(): Date {
            return this._fechaInicio;
        }

        set fechaInicio(fechaInicio: Date) {
            this._fechaInicio = fechaInicio;
        }

        get fechaFin(): Date | null {
            return this._fechaFin;
        }

        set fechaFin(fechaFin: Date | null) {
            this._fechaFin = fechaFin;
        }

        get profesion(): string {
            return this._profesion;
        }

        set profesion(profesion: string) {
            this._profesion = profesion;
        }
    }

    const empleado1 = new Employee("Veronika", "Tryhubyak", 21, new Date("2024-03-18"), new Date("2024-06-25"), "Desarrolladora Junior");
    const empleado2 = new Employee("Maria", "Millan", 26, new Date("2023-01-01"), null, "Profesora");

    console.log(`Empleado 1 - Nombre: ${empleado1.nombre}, Edad: ${empleado1.edad}`);
    console.log(`Empleado 2 - Nombre: ${empleado2.nombre}, Edad: ${empleado2.edad}`);
