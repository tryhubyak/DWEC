class Laptop implements DispositivoElectronico {
    nombre: string;
    encendido: boolean;
    modelo: string;

    constructor(nombre: string, modelo: string) {
        this.nombre = nombre;
        this.encendido = false;
        this.modelo = modelo;
    }

    encender(): void {
        this.encendido = true;
        console.log(`${this.nombre} (${this.modelo}) ha sido encendido.`);
    }

    apagar(): void {
        this.encendido = false;
        console.log(`${this.nombre} (${this.modelo}) ha sido apagado.`);
    }

    abrirPrograma(programa: string): void {
        console.log(`${this.nombre} (${this.modelo}) abrio el programa ${programa}.`);
    }
}
