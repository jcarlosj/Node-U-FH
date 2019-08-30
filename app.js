/** Bases de Node */
// Importa nuestro archivo 
const { crearArchivo } = require( './lib/multiply' );       // Destructuracion {}

var base = 7;

console .log( 'Module', module );       // module: Objeto Global que esta disponible durante toda la aplicacion

// Llama la funcion que retorna una Promesa
crearArchivo( base )
    .then( file => {
        console .log( `El archivo ${ file } a sido creado y guardado!` );
    })
    .catch( err => console .log( err) );