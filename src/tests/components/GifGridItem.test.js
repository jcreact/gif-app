
import React from 'react';
import { shallow } from 'enzyme';

import { GifGridItem } from '../../components/GifGridItem.jsx';

describe('Pruebas en el componente "GifGridItem.jsx"', () => {

    const props = {
        url: 'https://www.pinterest.com/pin/753508581394702754/',
        title: 'Dragon Ball',
        username: 'MKMastersu'
    };
    const component = shallow(<GifGridItem {...props} />);

    test('Debe mostrar <GifGridItem /> correctamente.', () => {
        expect(component).toMatchSnapshot();
    });

    test('Debe contener el título de la imagen.', () => {
        const title = component.find('p').text();
        expect(title).toBe(props.title);
    });

    test(`Debe contener una imagen y sus atributos 'src' y 'alt'.`, () => {
        const img = component.find('img');

        // expect(img && true).toBeTruthy();
        expect(img.exists()).toBeTruthy();

        // const { src, alt } = img.props();
        expect(img.prop('src')).toBe(props.url);
        expect(img.prop('alt')).toBe(props.title);

    });

    test(`Debe tener la clase 'col' en el tag <article>.`, () => {
        expect(component.find('article').hasClass('col')).toBeTruthy();
    });

    test(`Debe tener las clases 'card' y 'h-100' en el tag <div>.`, () => {
        const div = component.find('div');
        expect(div.hasClass('card')).toBeTruthy();
        expect(div.hasClass('h-100')).toBeTruthy();
    });

});
