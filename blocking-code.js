/** Importa funcion especifica del archivo 'usuario.js' */
let { getUsuarioSync } = require( './usuarios/usuario' );

/** Código bloqueante:
 *  Se llama asi al codigo secuencial donde debe finalizar una accion para ejecutar la siguiente */
console .log( 'Inicia' );
console .log( 'Usuario 1: ', getUsuarioSync( 1 )  );
console .log( 'Usuario 2: ', getUsuarioSync( 2 )  );
console .log( 'Usuario 3: ', getUsuarioSync( 3 )  );
console .log( 'Finaliza' );
