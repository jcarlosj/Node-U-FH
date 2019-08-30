/** Repaso JavaScript */

// Define una funcion Sincrona (que retorna una Promesa)
let people = new Array(
    {
        id: 1,
        firstName: 'Elisa Maria',
        lastName: 'Giraldo'
    },
    {
        id: 2,
        firstName: 'Luisa Maria',
        lastName: 'Balazar'
    },
    {
        id: 3,
        firstName: 'Ana Maria',
        lastName: 'Castro'
    }
), salaries = [
    {
        idUser: 1,
        value: 1000
    },
    {
        idUser: 2,
        value: 2000
    }
];

// Funcion Regresa una Promesa obteniendo una persona por ID
let getPeople = async ( id ) => {
    
    let personDB = people .find( person => person .id === id );

    // console .log( ' personDB ', personDB );
    if( ! personDB ) {
        throw new Error( `No existe el usuario con el ID: ${ id }` );     
    }
    else {
        return personDB;                                  
    }

}

// Funcion Regresa una Promesa obteniendo el salario de una persona
let getSalary = async ( person ) => {
    
    let salaryDB = salaries .find( salary => salary .idUser === person .id );

    // console .log( ' salaryDB ', salaryDB );
    if( ! salaryDB ) {
        throw new Error( `No se encontro un salario para ${ person .firstName }` );
    }
    else {
        return {           
            id: person .id,
            nombre: person .firstName,
            apellido: person .lastName,
            salario: salaryDB .value
        };       
    }
}

let getInfo = async ( id ) => {
    
    // Asumiendo que todos los resultados son los esperados
    let person = await getPeople( id ),       
        data = await getSalary( person );
    
    return `El salario de ${ data .nombre } ${ data .apellido } es de ${ data .salario } usd`;
}

// USUARIO QUE NO EXISTE
// Llamada la funcion que retorna el resultado de una promesa para obtener Persona con ID de usuario 10
getInfo( 10 ) .then( msg => console .log( msg ) ) .catch( err => console .log( err ) );

// USUARIO QUE EXISTE Y TIENE SALARIO ASIGNADO
// Llamada la funcion que retorna el resultado de una promesa para obtener Persona con ID de usuari
getInfo( 1 ) .then( msg => console .log( msg ) ) .catch( err => console .log( err ) );

// USUARIO QUE EXISTE Y NO TIENE SALARIO ASIGNADO
// Llamada la funcion que retorna el resultado de una promesa para obtener Persona con ID de usuario 3    
getInfo( 3 ) .then( msg => console .log( msg ) ) .catch( err => console .log( err ) );