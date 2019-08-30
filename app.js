/** Bases de Node */

// Importamos las librerias nativas de Node
const fs = require( 'fs' );

var base = 9,
    data = `Tabla del ${ base }\n\n`;

for( let i = 1; i <= 10; i++ ) {
    data += `${ base } * ${ i } = ${ base * i }\n`;
    console .log( data );
}

// Crea o Escribe un Archivo (El directorio 'tablas' debe estar creado)
fs .writeFile( `./tablas/tabla-del-${ base }.txt`, data, ( err ) => {
    if ( err ) throw err;
    console .log( `El archivo tabla-del-${ base }.txt a sido creado y guardado!` );
});