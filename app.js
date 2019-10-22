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
                    .help()                     /** Genera listado de ayudas */
                    .argv,
      { crearArchivo } = require( './lib/multiply' );       // Destructuracion {}

console .group( 'argv yargs', argv );
console .info( 'base', argv .base );
console .info( 'limite', argv .limite );
console .groupEnd();

// Llama la funcion que retorna una Promesa
// crearArchivo( base )
//     .then( file => {
//         console .log( `El archivo ${ file } a sido creado y guardado!` );
//     })
//     .catch( err => console .log( err) );