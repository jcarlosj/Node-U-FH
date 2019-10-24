/** Bases de Node */
const argv = require( './config/yargs' ) .argv,
      { crearArchivo, listarTabla } = require( './lib/multiply' );       // Destructuracion {}

/** Mensajes Consola */
console .log( 'argv', argv );

/** Crea opciones de comandos validos */
let comando = argv ._[ 0 ];

switch( comando ) {
    case 'listar': 
        console .log( listarTabla( argv .base, argv .limite ) );
        break;
    case 'crear': 
        // Llama la funcion que retorna una Promesa
        crearArchivo( argv .base, argv .limite )
            .then( file => {
                console .log( `El archivo ${ file } a sido creado y guardado!` );
            })
            .catch( err => console .log( err) );
        break;
    default: 
        console .log( 'Comando no reconocido' );
        break;    
}