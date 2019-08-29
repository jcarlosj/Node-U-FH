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

    // Inducimos el error (Simulación de Error)
    throw new Error( 'Edad no definida para este usuario' );     // Personaliza mensaje de Error        

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
getUser2() .then( name => { 
    console .log( ' getUser2 > ', name ); 
}) .catch( err => {                                                  // 4ta Ejecucion  
    console .log( 'ERROR Async: ', err );                            // Manejador de ERRORES para Async
});  
console .log( ' getUser2 : ', getUser2() );                          // 2da Ejecucion (ERROR)
getUser3() .then( name => console .log( ' getUser3 > ', name ) );    // 5ta Ejecucion
console .log( ' getUser3 : ', getUser3() );                          // 3er Ejecucion

/** NOTA:
 *  El manejador de errores para la definición de una funcion Asincrona (usando async)
 *  será capaz de identificar cualquier error producido en el cuerpo de la funcion
 *  (ver funcion getUser2 línea 12)
 */