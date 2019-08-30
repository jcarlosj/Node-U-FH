/** Repaso JavaScript */

// Define una funcion Sincrona (que retorna una Promesa)
let getUser = () => {
    return new Promise( ( resolve, reject ) => {

        setTimeout( () => {
            resolve({
                firstName: 'Juliana',
                lastName: 'Puerta Villada'
            });
        }, 3000 );

    });
}

// Define Funcion Asincrona
let saludo = async() => {
    let { firstName: nombre } = await getUser();        // Await: espera por la respuesta de la Promesa retornada por la Funcion Sincrona getUser (Usamos Destructuracion y alias)

    return `Hola ${ nombre }!!`;
}

// Llamado de ejecucion de la Funcion Asincrona
saludo() 
    .then( msg => {
        console .log( msg );
    }) 
    .catch( err => console .log( err ) );