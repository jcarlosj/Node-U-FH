/** Repaso JavaScript */

// Funcion Clasica
function saludo1() {
    return ` > Hola Mundo! \n   desde una Funcion clasica`;
}
console .log( saludo1() );

// Funcion Flecha: 
let saludo2 = () => {           
    return ` > Hola Mundo! \n   desde una Funcion Flecha`;
} 
console .log( saludo2() );

// Funcion Flecha abreviada
let saludo3 = _ => ` > Hola Mundo! \n   desde una Funcion Flecha Abreviada`;    
console .log( saludo3() );

/** NOTAS: 
 *  1.  Podemos dejar los parentesis vacios cuando no deseamos pasar parametros (ver lineas 4 y 10)
 *      Sin embargo tambien podemos usar un _ (guion bajo) que equivale a lo mismo (ver linea 16)
 *  2.  Las funciones flecha (Arrow Funtion) son funciones anonimas que se asignan a variables.
 *  3.  Las Arrow Function cuando retornan un valor pueden escribirse en una sola linea eliminando sus
 *      llaves y la palabra reservada 'return'
*/