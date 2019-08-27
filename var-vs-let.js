/** Repaso JavaScript */
var xmen = 'Wolverine';
let hero = 'Batman'

if( true ) {
    var xmen = 'Magneto';
    let hero = 'Superman'
}

var xmen = 'Cíclope';           /** Con 'var' se pueden redeclar las variables */
// let hero = 'Wonder Woman';   /** Con 'let' NO se pueden redeclar las variables (Genera un error por este concepto) */

console .group( 'var Vs let' );
console .log( 'var >', xmen );
console .log( 'let >', hero );
console .groupEnd();