/*
INSTRUCCIONES:

Crear una función tomando la variable "companies" como parámetro y reemplazar:

1. Todos los valores "undefined" en "usuarios" por un string vacío.

2. El nombre de cada "company" debe tener la primer letra en mayúscula.

3. El nombre y el apellido de cada "user" debe tener la primer letra en mayúscula.

4. Las "companies" deben ordenarse por su total de "user" (orden decreciente).

5. Los "users" de cada "company" deben aparecer en orden alfabético.
*/

const { cleanConsole } = require('../helpers/system.helpers');
const { createAll } = require('../helpers/data.helper');
const companies = createAll();


const replacement = (companies) => {
    companies.forEach(company => {
        for (let value in company) {
            if (value === 'name') company[value] = changeUpperCaseFirstLetter(company[value]);
        }
        company.users.forEach(users => {
            for (const value in users) {
                if (users[value] === undefined) users[value] = '';
                if (value === 'firstName' || value === 'lastName')
                    users[value] = changeUpperCaseFirstLetter(users[value]);
            }
        });

        sortByName(company.users);
    });
    sortByNumber(companies);
}

const changeUpperCaseFirstLetter = (text) => {
    let firsLetter = text.charAt(0).toUpperCase();
    return firsLetter + text.slice(1);
}

const sortByNumber = (arr) => {
    arr.sort((num1, num2) => {
        if (num1.usersLength < num2.usersLength) return 1;
        if (num1.usersLength > num2.usersLength) return -1;

        return 0;
    })
}

const sortByName = (arr) => {
    arr.sort((name1, name2) => {
        if (name1.firstName > name2.firstName) return 1;
        if (name1.firstName < name2.firstName) return -1;

        return 0;
    })
}

replacement(companies);

module.exports = replacement;
//cleanConsole(1, companies);
//console.log('%c ---- RES 1 --- ', 'background: #bada55; color: #222', 'Put here your method: ');