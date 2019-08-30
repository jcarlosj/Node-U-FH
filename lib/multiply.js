/** Multiplicar */
// Importamos las librerias nativas de Node
const fs = require( 'fs' );

module .exports .crearArchivo = ( base ) => {
    return new Promise( ( resolve, reject ) => {

        let data = `Tabla del ${ base }\n\n`;

        for( let i = 1; i <= 10; i++ ) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
            console .log( data );
        }

        // Crea o Escribe un Archivo (El directorio 'tablas' debe estar creado)
        fs .writeFile( `./tablas/tabla-del-${ base }.txt`, data, ( err ) => {
            if ( err ) reject( err );
            else resolve( `tabla-del-${ base }.txt` );
        });    

    });
}

