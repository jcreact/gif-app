
/**
 * Busca gifs relacionado a una categoria (texto).
 * 
 * @param {string} category Es la categoría para buscar gifs.
 * @returns {object[]} Un arreglo de gifs.
 * 
 * @author José Palma
 * @version 1.0.0
 */
export const getGifs = async (category) => {
    const apiKey = 'DLJNUu7JpsE2JItElblNcv9SGN4pD4v9';
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${apiKey}`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized.url,
            username: img?.username || 'Desconocido',
        };
    });
    return gifs;
};