/** Bases de Node */
const argv = require( 'yargs' )
                    .command(                   /** Configuracion de comandos en yargs*/
                        'listar',               /** Nombre del comando */
                        'Imprime en consola la tabla de multiplicar',       /** Mensaje */
                        {
                            base: {             /** Nombre del flag (bandera) */
                                demand: true,   /** Hace que la bandera sea de uso obligatorio */
                                alias: 'b'      /** Crea un alias de la bandera establecida (en este caso una abreviación) */
                            },
                            limite: {           /** Nombre del flag (bandera) */
                                alias: 'l',     /** Crea un alias de la bandera establecida (en este caso una abreviación) */
                                default: 10     /** Valor por defecto en caso de no ser proporcionado */
                            }
                        }
                    )
                    .command(                   /** Configuracion de comandos en yargs*/
                        'crear',                /** Nombre del comando */
                        'Genera archivo con el resultado de la tabla de multiplicar',       /** Mensaje */
                        {
                            base: {             /** Nombre del flag (bandera) */
                                demand: true,   /** Hace que la bandera sea de uso obligatorio */
                                alias: 'b'      /** Crea un alias de la bandera establecida (en este caso una abreviación) */
                            },
                            limite: {           /** Nombre del flag (bandera) */
                                alias: 'l',     /** Crea un alias de la bandera establecida (en este caso una abreviación) */
                                default: 10     /** Valor por defecto en caso de no ser proporcionado */
                            }
                        }
                    ) 
                    .help()                     /** Genera listado de ayudas */
                    .argv,
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