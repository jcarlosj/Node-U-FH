/** Bases de Node */
const argvYargs = require( 'yargs' ) .argv,
      { crearArchivo } = require( './lib/multiply' );       // Destructuracion {}

let argv = process .argv;
    // parametro = argv[ 2 ],              
    // base = parametro .split( '=' )[ 1 ];      // parametro .slit( '=' ) es igual a: [ '--base', '5' ]
                                              // base es igual a: 5
console .info( 'argv yargs', argvYargs );
console .info( 'argv process', argv );

// Llama la funcion que retorna una Promesa
// crearArchivo( base )
//     .then( file => {
//         console .log( `El archivo ${ file } a sido creado y guardado!` );
//     })
//     .catch( err => console .log( err) );