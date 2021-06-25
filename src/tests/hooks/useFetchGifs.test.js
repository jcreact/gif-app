import { renderHook } from '@testing-library/react-hooks';

import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Pruebas en el Hook "useFetchGifs.js"', () => {

    test('Debe retornar el estado inicial.', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('happy'));
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBeTruthy();
    });

    test(`Debe retornar un arreglo de imágenes y loading en 'false'.`, async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('happy'));

        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect(data).toHaveLength(10);
        expect(loading).toBeFalsy();
    });

});
