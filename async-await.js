/** Repaso JavaScript */

// Define una funcion Corriente o Sincrona
let getUser1 = () => {
    return {
        firstName: 'Juliana',
        lastName: 'Puerta Villada'
    }
}

// Define una funcion Asincrona
let getUser2 = async() => {
    return {
        firstName: 'Juliana',
        lastName: 'Puerta Villada'
    }
}

// Define una funcion que retorna una promesa (Equivale a Definir una funcion Asincrona)
let getUser3 = () => {
    return new Promise( ( resolve, reject ) => {
        resolve({
            firstName: 'Juliana',
            lastName: 'Puerta Villada'
        });
    });
}

console .log( ' getUser1 : ', getUser1() );                          // 1er Ejecucion
getUser2() .then( name => console .log( ' getUser2 > ', name ) );    // 4ta Ejecucion 
console .log( ' getUser2 : ', getUser2() );                          // 2da Ejecucion
getUser3() .then( name => console .log( ' getUser3 > ', name ) );    // 5ta Ejecucion
console .log( ' getUser3 : ', getUser3() );                          // 3er Ejecucion
