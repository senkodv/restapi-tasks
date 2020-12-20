export const getPagination = (page, size) => {
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0; // Salto de página para que cuando pases de página no se repitan las 3 tasks de la pagina anterior
    return { limit, offset };
}