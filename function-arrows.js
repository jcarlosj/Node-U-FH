/** Repaso JavaScript */

// Objeto Implicito
let Hero = {    
    nameHero: 'Superman',
    realFirstName: 'Clark',
    realLastName: 'Kent',
    // Declaracion Clasica
    getNameHero: function() {
        console.log( ' this: ', this );     // Hace referencia al Objeto Hero
        return this .nameHero;
    },
    // Declaracion Abreviada
    getRealFirstName() {
        console.log( ' this: ', this );     // Hace referencia al Objeto Hero
        return this .realFirstName;
    },
    // Declaracion como Function Arrow
    getRealLastName: () => {
        console.log( ' this: ', this );     // NO Hace referencia a nada (Tener cuidado con el uso del Arrow Function).
        return this .realLastName;
    }
}

console .group( 'Tipos de Funciones' );
console .log( ' >>> ', Hero .getNameHero() );         // Superman
console .log( ' >>> ', Hero .getRealFirstName() );    // Clark
console .log( ' >>> ', Hero .getRealLastName() );     // Undefined    (No puede obtener el valor ya que 'this' en este metodo no hace referencia al objeto 'Hero')
console .group();