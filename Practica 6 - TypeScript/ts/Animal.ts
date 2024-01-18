class Animal {
    private _nombre: string;
    private _edad: number;
    private _tipo: string;

    constructor(nombre: string, edad: number, tipo: string) {
        this._nombre = nombre;
        this._edad = edad;
        this._tipo = tipo;
    }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(nombre: string) {
        this._nombre = nombre;
    }

    get edad(): number {
        return this._edad;
    }

    set edad(edad: number) {
        this._edad = edad;
    }

    get tipo(): string {
        return this._tipo;
    }

    set tipo(tipo: string) {
        this._tipo = tipo;
    }

    hacerRuido(): void {
        console.log("Hacer ruido");
    }
}
