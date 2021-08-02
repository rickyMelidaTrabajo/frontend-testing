/*
INSTRUCCIONES:

1. Use la función creada en el ejemplo 4 para crear una nueva función tomando como parámetro
   la variable "companies" y devuelve un nuevo objeto con los siguientes atributos:

    'size' => total de "users"
    'average' => edad promedio de "users"
    'hasCar' => total de "users" propietarios de un carro
    'averageWithCar' => edad promedio de los "users" con un carro
 */
const { cleanConsole } = require('../helpers/system.helpers');
const { createAll } = require('../helpers/data.helper');

const userTable = require('./exer-4');

const companies = createAll();

const newObject = (companies) => {
   const newUserTable = userTable(companies);
   const myNewObject = {};
   let userWithCars = [];

   newUserTable.forEach(user => { if (user.car) userWithCars.push(user) });

   myNewObject.size = newUserTable.length
   myNewObject.average = averageAge(newUserTable);
   myNewObject.hasCar = userWithCars.length;
   myNewObject.averageWithCar = averageAge(userWithCars);

   return myNewObject
}

const averageAge = (users) => {
   const sumOfAge = users.reduce((acc, item) => { return acc += item.age }, 0);

   return Math.round(sumOfAge / users.length)
}


console.log(newObject(companies))

//cleanConsole(5, companies);
//console.log('%c ---- RES 5 --- ', 'background: #bada55; color: #222', 'Put here your method: ');
