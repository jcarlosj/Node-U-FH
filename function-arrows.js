/** Repaso JavaScript */

// Funcion Clasica
function saludo1( nombre ) {
    return ` > Hola ${ nombre }! \n   desde una Funcion clasica`;
}
console .log( saludo1( 'Juliana' ) );

// Funcion Flecha
let saludo2 = ( nombre ) => {
    return ` > Hola ${ nombre }! \n   desde una Funcion Flecha`;
} 
console .log( saludo2( 'Ana Maria' ) );

// Funcion Flecha abreviada
let saludo3 = nombre => ` > Hola ${ nombre }! \n   desde una Funcion Flecha Abreviada`;
console .log( saludo3( 'Elisa Maria' ) );

/** NOTAS: 
 *  1.  Podemos usar o no los parentesis cuando estamos pasando un solo parametro a la funcion 
 *      (comparar lineas 4, 10 y 16). En otros casos siempre debe usarse los parentesis.
 *  2.  Las funciones flecha (Arrow Funtion) son funciones anonimas que se asignan a variables.
 *  3.  Las Arrow Function cuando retornan un valor pueden escribirse en una sola linea eliminando sus
 *      llaves y la palabra reservada 'return'
*/