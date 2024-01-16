function contarPalabras(texto: string): number {
    const palabras = texto.split(' ');
    return palabras.length;
}

let texto = "contar palabras prueba"
console.log(`Cantidad de palabras en "${texto}": ${contarPalabras(texto)}`);

function getAvenger(nombre: string, poder?: string, arma = "arco") {
    if (poder) {
      return `El heroe ${nombre} tiene el poder de ${poder} y utiliza un ${arma}.`;
    } else {
      return `El heroe ${nombre} utiliza un ${arma}.`;
    }
  }
  
  console.log(getAvenger("El Pepe", "artes marciales", "cruzcampo"));
  console.log(getAvenger("Juan"));