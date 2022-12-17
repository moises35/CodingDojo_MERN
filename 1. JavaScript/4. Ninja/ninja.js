class Ninja {
    constructor(nombre, salud = 5) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
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

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
