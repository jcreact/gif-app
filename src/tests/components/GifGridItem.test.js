
import React from 'react';
import { shallow } from 'enzyme';

import { GifGridItem } from '../../components/GifGridItem.jsx';

describe('Pruebas en el componente "GifGridItem.jsx"', () => {

    test('Debe mostrar <GifGridItem /> correctamente.', () => {
        const wrapper = shallow(<GifGridItem />);
        expect(wrapper).toMatchSnapshot();
    });

});
