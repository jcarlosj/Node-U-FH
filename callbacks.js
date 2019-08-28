/** Repaso JavaScript */

// Definicion del Callback Personalizado
let getUsuarioByID = ( id, callback ) => {
    // Simula Obtener datos de la BD
    let user = {
        id,                         // En ES6 podemos obviar la asignación tradicional -> id: id,
        firstName: 'Juliana',
        lastName: 'Puerta Villada',
        gender: 'Female'
    }

    // Simula que el ID pasado no existe
    if( id === 10 ) {
        callback( `ERROR: El id ${ id }, no existe en la BD` );
    }
    else {
        callback( null, user );  // Pasa los 'datos' obtenidos al 'callback'
    }
}

// Llamada al Callback Personalizado con ID 10
getUsuarioByID( 10, ( err, usuario ) => {
    // Manejador de Errores
    if( err ) {                     
        return console .log( err );
    }
    console .log( 'Usuario:', usuario );
});
// Llamada al Callback Personalizado con ID 9
getUsuarioByID( 9, ( err, usuario ) => {
    // Manejador de Errores
    if( err ) {
        return console .log( err );
    }
    console .log( 'Usuario:', usuario );
});

// Callback Nativo de JavaScript
setTimeout( () => {
    console .log( ' > Hello!' );
}, 3000 );

/** NOTAS: 
 *  1.  Se le conoce como Callbacks a funciones que reciben como parámetro(s) otra funcion(es)
 *  2.  setTimeout() es un Callback nativo de JavaScript
 *  3.  Al crear un Callback personalizado podemos usar las funciones clasicas o los Arrow Function
 *  4.  La Funcion en el ejemplo llamada 'callback' puede nombrarse de cualquier otra forma solo se 
 *      uso de referencia para el ejemplo pero esta puede adoptar cualquier nombre ya que NO es una
 *      palabra reservada del lenguaje
 */