// Clase Padre
class Ninja {
    constructor(nombre, salud = 5, velocidad = 3, fuerza = 3) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
    }

    sayName() {
        console.log(`Soy un ninja y mi nombre es ${this.nombre}`);
    }

    showStats() {
        console.log('--> Estadisticas');
        console.log(`\t- Nombre: ${this.nombre}\n\t- Salud: ${this.salud}\n\t- Velocidad: ${this.velocidad}\n\t- Fuerza: ${this.fuerza}`);
    }

    drinkSake() {
        this.salud += 10;
    }
}

// Clase hija
class Sensei extends Ninja {
    constructor(nombre, salud = 200, velocidad = 10, fuerza = 10, sabiduria = 10) {
        super(nombre, salud, velocidad, fuerza);
        this.sabiduria = sabiduria;
    }

    speakWisdom() {
        console.log(`-> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."`);
        super.drinkSake();
    }
}

// ejemplo de salida
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"

