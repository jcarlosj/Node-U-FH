/** Importa funcion especifica del archivo 'usuario.js' */
let { getUsuarioSync } = require( './usuarios/usuario' );

/** Código bloqueante:
 *  Se llama asi al codigo secuencial donde debe finalizar una accion para ejecutar la siguiente */
console .log( 'Inicia' );

for( let i = 1; i < 4; i++ ) {
    console .log( 'Usuario ' + i + ': ', getUsuarioSync( i )  );
}

console .log( 'Finaliza' );
