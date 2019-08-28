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

// Definicion del Callback personalizado (Obtener Persona)
let getPeople = ( id, callback ) => {
    let personDB = people .find( person => person .id === id );

    // console .log( ' personDB ', personDB );
    if( ! personDB ) {
        callback( `ERROR: No existe el usuario con el ID: ${ id }` );
    }
    else {
        callback( null, personDB );
        // callback( null, personDB );
    }
}

// Definicion del Callback personalizado (Obtener Salario)
let getSalary = ( person, callback ) => {
    let salaryDB = salaries .find( salary => salary .idUser === person .id );

    // console .log( ' salaryDB ', salaryDB );
    if( ! salaryDB ) {
        callback( `ERROR: No se encontro un salario para ${ person .firstName }` );
    }
    else {
        callback( null, {           // callback( null, { ... }); Se recomienda siempre enviar un objeto JSON
            id: person .id,
            nombre: person .firstName,
            apellido: person .lastName,
            salario: salaryDB .value
        });         
    }
}

// USUARIO QUE NO EXISTE
// Llamado del Callback para obtener Persona con ID de usuario 10 
getPeople( 10, ( err, person ) => {
    if( err ) return console .log( err );              // Manejador de Errores

    //console .log( person );                   // Despliega el objeto del Array 'people' con 'id' 1

    // Llamado del Callback para Obetener Salario de la persona
    getSalary( person, ( err, data ) => {
        if( err ) return console .log( err );          // Manejador de Errores

        //console .log( data );
        console .log( `El salario de ${ data .nombre } ${ data .apellido } es de ${ data .salario } usd` );
    });
});

// USUARIO QUE EXISTE Y TIENE SALARIO ASIGNADO
// Llamado del Callback para obtener Persona con ID de usuario 1
getPeople( 1, ( err, person ) => {
    if( err ) return console .log( err );              // Manejador de Errores

    //console .log( person );                   // Despliega el objeto del Array 'people' con 'id' 1

    // Llamado del Callback para Obetener Salario de la persona
    getSalary( person, ( err, data ) => {
        if( err ) return console .log( err );          // Manejador de Errores

        //console .log( data );
        console .log( `El salario de ${ data .nombre } ${ data .apellido } es de ${ data .salario } usd` );
    });
});

// USUARIO QUE EXISTE Y NO TIENE SALARIO ASIGNADO
// Llamado del Callback para obtener Persona con ID de usuario 3
getPeople( 3, ( err, person ) => {
    if( err ) return console .log( err );              // Manejador de Errores

    //console .log( person );                   // Despliega el objeto del Array 'people' con 'id' 1

    // Llamado del Callback para Obetener Salario de la persona
    getSalary( person, ( err, data ) => {
        if( err ) return console .log( err );          // Manejador de Errores

        //console .log( data );
        console .log( `El salario de ${ data .nombre } ${ data .apellido } es de ${ data .salario } usd` );
    });
});


/** NOTAS: 
 *  Errores comunes al crear Callbacks personalizados
 *  1.  Duplicar el llamado del Callback (ver linea 33)
 *  2.  Anidar Callbacks
 *      - Dificulta manejar los errores.
 *        * Al no retornar el mensaje de error no se podra controlar adecuadamente el codigo se rompera
 *          al encontrar que algun valor de alguna variable esta indefinida (probar quitando 'return' lineas 66 y 72)
 *      - Se vuelve dificil de mantener al hacer anidaciones de mayor profundidad.
 */