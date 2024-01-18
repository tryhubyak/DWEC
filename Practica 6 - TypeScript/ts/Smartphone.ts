class Smartphone implements DispositivoElectronico {
    nombre: string;
    encendido: boolean;
    marca: string;

    constructor(nombre: string, marca: string) {
        this.nombre = nombre;
        this.encendido = false;
        this.marca = marca;
    }

    encender(): void {
        this.encendido = true;
        console.log(`${this.nombre} (${this.marca}) ha sido encendido.`);
    }

    apagar(): void {
        this.encendido = false;
        console.log(`${this.nombre} (${this.marca}) ha sido apagado.`);
    }

    llamar(numero: string): void {
        console.log(`${this.nombre} (${this.marca}) está llamando al número ${numero}.`);
    }
}
