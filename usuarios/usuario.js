/** Código bloqueante */
function getUsuarioSync( id ) {
    const startPoint = new Date() .getTime();

    while( new Date() .getTime() - startPoint <= 3000 ) {   /** Espera 3s */
        /** Aqui obtenemos datos de la BD 'fetch' */
    }

    return {
        id,
        nombre: `Usuario ${ id }`
    }
} 

/** Código NO bloqueante */
function getUsuario( id, callback ) {
    let usuario = {
        id,
        nombre: `Usuario ${ id }` 
    }

    /** Aqui obtenemos datos de la BD 'fetch' */
    setTimeout( _ => {
        callback( usuario );
    }, 3000 );                  /** Espera 3s */
}

/** Exporta Funciones como Modulos */
module .exports = {
    getUsuarioSync,
    getUsuario
}