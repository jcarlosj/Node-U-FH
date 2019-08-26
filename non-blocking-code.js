/** Importa funcion especifica del archivo 'usuario.js' */
let { getUsuario } = require( './usuarios/usuario' );

/** Código NO bloqueante: 
 *  Usando Callbacks podemos ejecutar varias acciones de forma simultanea */
console .log( 'Inicia' );

getUsuario( 1, usuario => {
    console .log( 'Usuario 1: ', usuario  );
});
getUsuario( 2, usuario => {
    console .log( 'Usuario 2: ', usuario  );
});
getUsuario( 3, usuario => {
    console .log( 'Usuario 3: ', usuario  );
});

console .log( 'Finaliza' );