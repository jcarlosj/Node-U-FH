/** Repaso JavaScript */
let superman = {
    realFirstName: 'Clark',
    realLastName: 'Kent',
    powers: [ 'Volar', 'Superfuerza', 'Invulnerabilidad', 'Supervelocidad', 'Visión rayos x', 'Visión calorífica', 'Visión telescópica', 'Visión infrarroja', 'Visión microscópica', 'Superoído', 'Superaliento' ],
    creators: [ 'Jerry Siegel', 'Joe Shuster' ],
    getName: function () {
        return `${ this .realFirstName } ${ this .realLastName }`;
    },
    getCreators() {
        return `${ this .creators[ 0 ] } y ${ this .creators[ 1 ] }`;
    }
}

// Extraer valores de forma clasica
let nombre = superman .realFirstName,
    apellido = superman .realLastName,
    power = superman .powers[ 0 ];

console .group( 'Clasica' );
console .log( 'Nombre > ', nombre, apellido );
console .log( 'Un Poder > ', power );
console .log( 'Creadores > ', superman .getCreators() );    
console .groupEnd();

// Destructuracion
let { realFirstName: name, realLastName, powers } = superman;   // Obtenemos los valores del objeto usando el nombre de sus propiedades originales
                                                                // en el caso de 'realFirstName' hemos renombrado este valor por 'name'

console .group( 'Destructuracion' );
console .log( 'Nombre > ', name, realLastName );            // Renombramos 'realFirstName' como name para desplegar el nombre
console .log( 'Un Poder > ', power );                       // Solo nos recupera el primer valor del Array 'powers'
console .log( 'Creadores > ', superman .getCreators() );    // No soporta destructuracion
console .groupEnd();    