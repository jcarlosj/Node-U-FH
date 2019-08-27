/** Repaso JavaScript */
let hero = 'Superman',
    realName = 'Clark Kent';

console .log( `${ hero } ${ realName }` );      /** Se usan las 'backticks' para crear un 'template string' */

console .log( ' > ', `${ hero } ${ realName }` === hero + ' ' + realName );     // true

function getName() {
    return `${ hero } es ${ realName }` 
}

console .log( `El nombre real de ${ getName() }` );