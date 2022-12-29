const faker = require('@faker-js/faker').faker;
const express = require('express');
const app = express();
const port = 5000;

// Clase Usuario
class User {
    constructor() {
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phone = faker.phone.number();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

// Clase Empresa
class Empresa {
    constructor() {
        this._id = faker.datatype.uuid();
        this.name = faker.company.name();
        this.direccion = {
            calle: faker.address.streetAddress(),
            ciudad: faker.address.cityName(),
            estado: faker.address.state(),
            postal: faker.address.zipCode(),
            pais: faker.address.country()
        }
    }
}


// Enrutamientos
app.get('/', (req, res) => {
    res.send(`<h2>Acceda a una de las siguientes direcciones: </h2>
        <ul>
            <li>
                <a href="/api/company/new">/api/company/new</a>
            </li>
            <li>
                <a href="/api/users/new">/api/users/new</a>
            </li>
            <li>
                <a href="/api/user/company">/api/user/company</a>
            </li>
        </ul>
    `);
});

app.get('/api/users/new', (req, res) => {
    res.json(new User());
});

app.get('/api/company/new', (req, res) => {
    res.json(new Empresa());

});

app.get('/api/user/company', (req, res) => {
    res.json([{Empresa: new Empresa()}, {Usuario: new User()}]);
});



// Listen server
app.listen(port, ()=> {
    console.log(`Server running in port ${port}`);
});