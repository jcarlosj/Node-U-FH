/** Repaso JavaScript */

// Define una funcion Asincrona
let getUser2 = async() => {
        
    setTimeout( () => {
        return {
            firstName: 'Juliana',
            lastName: 'Puerta Villada'
        }
    }, 3000 );
}

getUser2() .then( name => {                     // 2da en Ejecutarse, espera la finalización de la Promesa
    console .log( ' getUser2 > ', name );       // Retorna undefined
}) .catch( err => {                                                  
    console .log( 'ERROR Async: ', err );       // Manejador de ERRORES para Async
});  

console .log( ' getUser2 : ', getUser2() );     // 1ra en Ejecutarse: Retorna Promesa con valores undefined      



// Define una funcion que retorna una promesa (Equivale a Definir una funcion Asincrona)
let getUser3 = () => {
    return new Promise( ( resolve, reject ) => {

        setTimeout( () => {
            resolve({
                firstName: 'Juliana',
                lastName: 'Puerta Villada'
            });
        }, 3000 );

    });
}

getUser3() .then( name => {                     // 4ta en Ejecutarse, espera la finalización de la Promesa
    console .log( ' getUser3 > ', name );       // Retorna { firstName: 'Juliana', lastName: 'Puerta Villada' } 
}) .catch( err => {                                                  
    console .log( 'ERROR Async: ', err );       // Manejador de ERRORES para Async
});  

// Se ejecuta PRIMERO
console .log( ' getUser3 : ', getUser3() );     // 1ra en Ejecutarse: Retorna Promesa con valores pendientes      

/** NOTA:
 *  1.  Todas las promesas son en si mismas funciones asincronas y viceversa, por lo que requieren
 *      finalizar la accion para las que fueron programadas y retornar los valores esperados.
 *  2.  Sin embargo en este ejemplo podemos ver que solo las funciones que retornan Promesas devuelven
 *      los datos esperados (ver linea 39), a diferencia de las funciones asincronas que devuelven  
 *      valores indefinidos, Promesas con valores indefinidos o pendientes ( ver lineas 15, 20 y 45 )
 *  3.  Una Promesa siempre debe usar la estructura then().catch() para obtener sus valores y manejar 
 *      sus errores y se recomienda hacer lo mismo para las funciones declaradas como asincronas con 
 *      la palabra reservada async:
 * 
 *      let mifuncion = async function() { ... }
 * 
 *      o 
 * 
 *      let mifuncion = async() => { ... }
 *  
 */