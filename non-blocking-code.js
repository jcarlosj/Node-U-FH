/** Importa funcion especifica del archivo 'usuario.js' */
let { getUsuario } = require( './usuarios/usuario' );

/** Código NO bloqueante: 
 *  Usando Callbacks podemos ejecutar varias acciones de forma simultanea */
console .log( 'Inicia' );

for( let i = 1; i < 4; i++ ) {
    getUsuario( i, usuario => {
        console .log( 'Usuario ' + usuario .id + ': ', usuario  );
    });
}

console .log( 'Finaliza' );