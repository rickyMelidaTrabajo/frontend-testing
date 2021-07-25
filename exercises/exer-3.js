/*
INSTRUCCIONES:

Cree una función tomando la variable "companies" como parámetro y devolviendo
un booleano que:

1. Valide que todos los nombres de las empresas y los atributos "firstName" y "lastName" de "users" están en mayúsculas.

2. Probar la operación de esta función importando la función creada en el "exer-1.js". */

const { cleanConsole } = require('../helpers/system.helpers');
const { createAll } = require('../helpers/data.helper');

const modifiedCompanies = require('./exer-1');

const companies = createAll();
//modifiedCompanies(companies);

console.log(companies)

const validateNames = (companies) => {
    const isCapitalized = /[A-Z]/;
    let res = false;

    companies.forEach(company => {
        if (company.name.match(isCapitalized)) {
            company.users.forEach(user => {
                if (user.firstName !== '' && user.lastName !== '') {
                    if (user.firstName.match(isCapitalized) && user.lastName.match(isCapitalized)) {
                        res = true;
                    }
                }
            });
        }
    });

    return res;
}

console.log(validateNames(companies))

//cleanConsole(3, companies);
//console.log('%c ---- RES 3 --- ', 'background: #bada55; color: #222', 'Put here your method: ');
