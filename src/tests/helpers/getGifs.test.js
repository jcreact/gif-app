import { getGifs } from '../../helpers/getGifs';


describe('Pruebas en el helper "getGifs.js"', () => {

    test('Debe retornar un arreglo de hasta 10 imágenes sobre "happy".', async () => {
        const gifs = await getGifs('happy');
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs.length).toBeLessThanOrEqual(10);
    });

    test('Debe retornar un arreglo vacío si la categoria es un "".', async () => {
        const gifs = await getGifs('');
        expect(gifs).toHaveLength(0);
    });

});
