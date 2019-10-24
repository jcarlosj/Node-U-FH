/** Multiplicar */
// Importamos las librerias nativas de Node
const fs = require( 'fs' );

let crearArchivo = ( base, limite ) => {
        return new Promise( ( resolve, reject ) => {

            let data;

            if( ! Number( base ) ) {
                reject( ` > El valor de la base '${ base }' no es un número` );
                return;
            }

            if( ! Number( limite ) ) {
                reject( ` > El valor del limite '${ limite }' no es un número` );
                return;
            }

            data = `Tabla del ${ base }\n\n`;

            for( let i = 1; i <= limite; i++ ) {
                data += `${ base } * ${ i } = ${ base * i }\n`;
            }

            // Crea o Escribe un Archivo (El directorio 'tablas' debe estar creado)
            fs .writeFile( `./tablas/tabla-del-${ base }-al-${ limite }.txt`, data, ( err ) => {
                console .log( data );

                if ( err ) reject( err );
                else resolve( `tabla-del-${ base }-al-${ limite }.txt` );
            });    

        });
    },
    listarTabla = ( base, limite ) => {

        let data;

        if( ! Number( base ) ) {
            console .log( ` - El valor de la base '${ base }' no es un número` );
            return;
        }
        if( ! Number( limite ) ) {
            console .log( ` - El valor del limite '${ limite }' no es un número` );
            return;
        }

        data = `Tabla del ${ base }\n\n`;

        for( let i = 1; i <= limite; i++ ) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        return data;
    }

module .exports = {
    listarTabla,
    crearArchivo            // Gracias a ES6 ya no hay que ponerlo asi: crearArchivo: crearArchivo
                            // Donde el primero es la forma como se va a llamar cuando lo importemos y el otro el nombre de la funcion
}