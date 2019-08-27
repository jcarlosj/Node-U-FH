/** Repaso JavaScript */
console .group( 'Bucle usando var' );
for( var i = 0; i < 5; i++) {
    console .log( `i : ${ i }` );
}
console .log( `i > ${ i }` );       /** 6 */
console .groupEnd();

console .group( 'Bucle usando let' );
for( let j = 0; j < 5; j++) {
    console .log( `j : ${ j }` );
}
// console .log( `j > ${ j }` );   /** Error de referencia ya que 'j' no esta declarado fuera del bucle/ciclo 'for' */
console .groupEnd();