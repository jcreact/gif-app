import { shallow } from 'enzyme';

import { GifGrid } from '../../components/GifGrid.jsx';

import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el componente "GifGrid.jsx".', () => {

    const category = 'happy';
    const gifs = [{
        id: '123456789',
        title: 'Dragon Ball',
        url: 'https://www.pinterest.com/pin/753508581394702754/',
        username: 'Desconocido',
    }];
    useFetchGifs.mockReturnValue({
        data: [],
        loading: true
    });
    const component = shallow(<GifGrid category={category} />);


    test(`Debe mostrar <GifGrid /> correctamente (sin 'GifGridItem').`, () => {
        expect(component).toMatchSnapshot();

        // Revisar que el Spinner se muestre.
        expect(component.find('Spinner').exists()).toBeTruthy();
    });

    test(`Debe tener el título con la categoría 'happy'.`, () => {
        expect(component.find('h3').text()).toBe(category);
    });

    test(`Debe de mostrar un 'GifGridItem' cuando 'useFetchGifs' devuelva el resultado.`, () => {
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const component = shallow(<GifGrid category={category} />);

        // Revisar el snapshot (opcional).
        // expect(component).toMatchSnapshot();

        // Revisar que el Spinner no exista.
        expect(component.find('Spinner').exists()).toBeFalsy();

        // Revisar que GifGridItem existan según el arreglo de gifs.
        expect(component.find('GifGridItem')).toHaveLength(gifs.length);

    });

});
