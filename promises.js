/** Repaso JavaScript */

let people = new Array(
    {
        id: 1,
        firstName: 'Elisa Maria',
        lastName: 'Giraldo'
    },
    {
        id: 2,
        firstName: 'Luisa Maria',
        lastName: 'Balazar'
    },
    {
        id: 3,
        firstName: 'Ana Maria',
        lastName: 'Castro'
    }
), salaries = [
    {
        idUser: 1,
        value: 1000
    },
    {
        idUser: 2,
        value: 2000
    }
];

console .log( salaries );

// Funcion que obtiene una persona por ID
let getPeople = ( id ) => {
    // Definicion de Promesa (Obtener Persona)          
    return new Promise( ( resolve, reject ) => {        // resolve y reject: son dos callbacks, adicional al que las contiene. Las promesas son una nueva caracteristica del ES6
        let personDB = people .find( person => person .id === id );

        // console .log( ' personDB ', personDB );
        if( ! personDB ) {
            // reject debe llamarse cuando se asume que no cumplio la tarea, fallo, o se produjo un error.
            reject( `ERROR: No existe el usuario con el ID: ${ id }` );     
        }
        else {
            // resolve debe llamarse cuando se asume que cumplio la tarea exitosamente. No se pueden mandar mas de dos argumentos.
            resolve( personDB );                                  
        }
    });
}

// Funcion que Obtiene el salario de una persona
let getSalary = ( person ) => {
    // Definicion de Promesa (Obtener Salario de una Persona)
    return new Promise( ( resolve, reject ) => {
        let salaryDB = salaries .find( salary => salary .idUser === person .id );

        // console .log( ' salaryDB ', salaryDB );
        if( ! salaryDB ) {
            // reject debe llamarse cuando se asume que no cumplio la tarea, fallo, o se produjo un error.
            reject( `ERROR: No se encontro un salario para ${ person .firstName }` );
            console .log( 'Este mensaje se desplegará a pesar de ser lanzado posterior al resolve, aplica para reject tambien' );
            reject( `ERROR: No se encontro un salario para ${ person .firstName }` );
            reject( `ERROR: No se encontro un salario para ${ person .firstName }` );
            
        }
        else {
            // resolve debe llamarse cuando se asume que cumplio la tarea exitosamente. No se pueden mandar mas de dos argumentos.
            resolve({           
                id: person .id,
                nombre: person .firstName,
                apellido: person .lastName,
                salario: salaryDB .value
            });       
        }
    });
}

// USUARIO QUE NO EXISTE
// Llamada la funcion que retorna el resultado de una promesa para obtener Persona con ID de usuario 10
getPeople( 10 ) .then( person => {
    console .log( ' person ', person );

    // Llamado de la funcion para Obtener Salario de la persona
    getSalary( person ) .then( data => {
        console .log( `El salario de ${ data .nombre } ${ data .apellido } es de ${ data .salario } usd` );
    }, err => {                     // Manejador de Errores
        console .log( err );
    });
}, err => {                         // Manejador de Errores
    console .log( err );
});

// USUARIO QUE EXISTE Y TIENE SALARIO ASIGNADO
// Llamada la funcion que retorna el resultado de una promesa para obtener Persona con ID de usuario 1
getPeople( 1 ) .then( person => {
    console .log( ' person ', person );

    // Llamado de la funcion para Obtener Salario de la persona
    getSalary( person ) .then( data => {
        console .log( `El salario de ${ data .nombre } ${ data .apellido } es de ${ data .salario } usd` );
    }, err => {                     // Manejador de Errores
        console .log( err );
    });
}, err => {                         // Manejador de Errores
    console .log( err );
});

// USUARIO QUE EXISTE Y NO TIENE SALARIO ASIGNADO
// Llamada la funcion que retorna el resultado de una promesa para obtener Persona con ID de usuario 3
getPeople( 3 ) .then( person => {
    console .log( ' person ', person );

    // Llamado de la funcion para Obtener Salario de la persona
    getSalary( person ) .then( data => {
        console .log( `El salario de ${ data .nombre } ${ data .apellido } es de ${ data .salario } usd` );
    }, err => {                     // Manejador de Errores
        console .log( err );
    });
}, err => {                         // Manejador de Errores
    console .log( err );
});

/** NOTAS:
 *  1.  resolve y reject pueden llamarse varias veces pero solo se van a ejecutar una sola vez, a diferencia 
 *      de lo que pasa con los callbacks (ver lineas 59, 61 y 62)
 *  2.  Al ejecutarse resolve o reject no funcionan como un 'return' en terminos que corta el flujo de 
 *      ejecución, pueden realizarse otras acciones si existen sentencias posteriores a estos (ver linea 60)
 */