/** Multiplicar */
// Importamos las librerias nativas de Node
const fs = require( 'fs' );

let crearArchivo = ( base ) => {
        return new Promise( ( resolve, reject ) => {

            let data;

            if( ! Number( base ) ) {
                reject( `El valor '${ base }' no es un número` );
                return;
            }

            data = `Tabla del ${ base }\n\n`;

            for( let i = 1; i <= 10; i++ ) {
                data += `${ base } * ${ i } = ${ base * i }\n`;
            }

            // Crea o Escribe un Archivo (El directorio 'tablas' debe estar creado)
            fs .writeFile( `./tablas/tabla-del-${ base }.txt`, data, ( err ) => {
                console .log( data );

                if ( err ) reject( err );
                else resolve( `tabla-del-${ base }.txt` );
            });    

        });
    },
    listarTabla = ( base, limite ) => {
        return new Promise( ( resolve, reject ) => {
            let data;

            if( ! Number( base ) ) {
                reject( `El valor '${ base }' no es un número` );
                return;
            }

            data = `Tabla del ${ base }\n\n`;

            for( let i = 1; i <= limite; i++ ) {
                data += `${ base } * ${ i } = ${ base * i }\n`;
            }

            resolve( data );
        });
    }

module .exports = {
    listarTabla,
    crearArchivo            // Gracias a ES6 ya no hay que ponerlo asi: crearArchivo: crearArchivo
                            // Donde el primero es la forma como se va a llamar cuando lo importemos y el otro el nombre de la funcion
}