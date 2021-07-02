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

const replaceUndefinedValue = (companies) => {

    companies.forEach(company => {
        company.users.forEach(users => {
            for(const value in users) {
                if(users[value] === undefined) users[value] = '';
            }
        });
    });
}
//replaceUndefinedValue(companies);

const changeFirstLetterOfCompany = (companies)=>{
    companies.forEach(company => {
        for (let value in company) {
            if(value === 'name') {                
                let firsLetter = company[value].charAt(0).toUpperCase();
                company[value] = firsLetter + company[value].slice(1);
            }
        }
    })
}
//changeFirstLetterToUpperCase(companies);

const changeFirstLetterOfUsers = (companies)=>{
    companies.forEach(company => {
        company.users.forEach(users => {
            for(const value in users) {
                if(value == 'firstName' || value == 'lastName') {
                    if(users[value] != undefined) {
                        let firsLetter = users[value].charAt(0).toUpperCase();
                        users[value] = firsLetter + users[value].slice(1);
                    }
                }
            }
        });
    })
}
//changeFirstLetterOfUsers(companies)


const orderCompanies = (companies) => {
    companies.sort((a, b)=>{
        if (a.usersLength < b.usersLength) return 1;
        if (a.usersLength > b.usersLength) return -1;

        return 0;
    });
}
//orderCompanies(companies)


const orderAlphabetically = (companies) => {
    changeFirstLetterOfUsers(companies);

    companies.forEach(company => {
        company.users.sort((a, b)=> {
            if(a.firstName > b.firstName) return 1;
            if(a.firstName < b.firstName) return -1;

            return 0;
        })
    })
}
//orderAlphabetically(companies);


cleanConsole(1, companies);
console.log('%c ---- RES 1 --- ', 'background: #bada55; color: #222', 'Put here your method: ');
