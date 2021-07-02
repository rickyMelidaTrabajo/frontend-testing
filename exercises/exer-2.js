/* INSTRUCCIONES:

Crear una función tomando como parámetro la variable "companies" y un booleano "hasCar":

1. Para cada "company" debe conservar solo "users" cuyo valor de atributo "car" es igual al parámetro del booleano "hasCar".

2. El atributo "usersLength" deben indicar el total de "users" correspondientes al parámetro "hasCar".

*/

const { cleanConsole } = require('../helpers/system.helpers');
const { createAll } = require('../helpers/data.helper');

const companies = createAll();

const usersWhitCars = (companies, hasCar)=>{
    let userWithCars = [];
    companies.forEach(company => {
        company.users.forEach(user=>{
            if(user.car === hasCar) {
                userWithCars.push(user);
            }
        })
    });

    return userWithCars;
}
//let user = usersWhitCars(companies, true);


//cleanConsole(2, companies);
//console.log('%c ---- RES 2 --- ', 'background: #bada55; color: #222', 'Put here your method: ');
