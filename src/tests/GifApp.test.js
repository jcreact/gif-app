import { shallow } from 'enzyme';
import { GifApp } from '../GifApp';

describe('Pruebas en el componente "GifApp.js".', () => {


    test('Debe mostrar <GifApp /> correctamente.', () => {
        const component = shallow(<GifApp />);

        expect(component).toMatchSnapshot();
        // Revisar que contenga el título de la aplicación.
        expect(component.find('h2').text()).toBe('Gif App');
        // Revisar que el componente AddCategory se muestre.
        expect(component.find('AddCategory').exists()).toBeTruthy();
    });

    test(`Debe mostrar <GifApp /> con dos componentes 'GifGrid'.`, () => {
        const list = ['happy', 'sad'];
        const component = shallow(<GifApp list={list} />);

        expect(component).toMatchSnapshot();
        // Revisar que GifGrid existan según el arreglo de categorías. 
        expect(component.find('GifGrid')).toHaveLength(list.length);
    });

});
