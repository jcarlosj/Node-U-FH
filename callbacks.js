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
);

console .log( people );

// Definicion del Callback personalizado
let getPeople = ( id, callback ) => {
    let personDB = people .find( person => person .id === id );

    // console .log( ' personDB ', personDB );
    if( ! personDB ) {
        callback( `ERROR: No existe el registro con el ID: ${ id }` );
    }
    else {
        callback( null, personDB );
        // callback( null, personDB );
    }
}

// Llamado del Callback personalizado con ID 1
getPeople( 1, ( err, person ) => {
    if( err ) console .log( err );              // Manejador de Errores
    console .log( person );                     // Despliega el objeto del Array 'people' con 'id' 1
});
// Llamado del Callback personalizado con ID 10
getPeople( 10, ( err, person ) => {
    if( err ) console .log( err );              // El manejador despliega el mensaje de error ya que no existe el ID 10
    console .log( person );
});


/** NOTAS: 
 *  Errores comunes al crear Callbacks personalizados
 *  1.  Duplicar el llamado del Callback (ver linea 33)
 */