const options = {
        base: {             /** Nombre del flag (bandera) */
            demand: true,   /** Hace que la bandera sea de uso obligatorio */
            alias: 'b'      /** Crea un alias de la bandera establecida (en este caso una abreviación) */
        },
        limite: {           /** Nombre del flag (bandera) */
            alias: 'l',     /** Crea un alias de la bandera establecida (en este caso una abreviación) */
            default: 10     /** Valor por defecto en caso de no ser proporcionado */
        }
    },

    /** Configuración de Yargs */
    argv = require( 'yargs' )
        .command(                   /** Configuracion específica de comando*/
            'listar',               /** Nombre del comando */
            'Imprime en consola la tabla de multiplicar',       /** Mensaje */
            options
        )
        .command(                   /** Configuracion específica de comando*/
            'crear',                /** Nombre del comando */
            'Genera archivo con el resultado de la tabla de multiplicar',       /** Mensaje */
            options
        ) 
        .help()                     /** Genera listado de ayudas */
        .argv;

module .exports = {
    argv
}