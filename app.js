/** Bases de Node */
// Importa nuestro archivo 
const { crearArchivo } = require( './lib/multiply' );       // Destructuracion {}

//console .log( 'Module', module );       // module: Objeto Global que esta disponible durante toda la aplicacion
//console .log( 'Process', process );         // process: Variable de entorno global
console .log( 'Process >>', process .argv );  // process .argv: Variable con los argumentos (por defecto siempre trae 2 en un Array)
                                              // El primero el 'path' de la instalacion de 'node'
                                              // El segundo el 'path' del archivo ejecutado
let argv = process .argv,
    parametro = argv[ 2 ],              
    base = parametro .split( '=' )[ 1 ];      // parametro .slit( '=' ) es igual a: [ '--base', '5' ]
                                              // base es igual a: 5

// Llama la funcion que retorna una Promesa
crearArchivo( base )
    .then( file => {
        console .log( `El archivo ${ file } a sido creado y guardado!` );
    })
    .catch( err => console .log( err) );

/** NOTA:
 *  Ahora podemos enviar en la terminal la orden para generar una tabla específica escribiendo
 *      $ node ./app.js --base=3  
 *          ó
 *      $ node app --base=3  
 *          ó
 *      $ node app -b=3  
 * 
 */