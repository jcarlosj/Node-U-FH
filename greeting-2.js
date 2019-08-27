console .log( 'Inicia' );               // Primero en Ejecutarse

setTimeout( () => {                     // Ultimo en Ejecutarsee
    console .log( '1er Saludo' );
}, 3000 );
setTimeout( _ => {                      // Tercero en Ejecutarse
    console .log( '2do Saludo' );
}, 0 );
setTimeout( _ => {                      // Cuarto en Ejecutarse
    console .log( '3er Saludo' );
}, 0 );

console .log( 'Finaliza' );             // Segundo en Ejecutarse