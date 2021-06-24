
import React from 'react';
import { shallow } from 'enzyme';

import { GifGridItem } from '../../components/GifGridItem.jsx';

describe('Pruebas en el componente "GifGridItem.jsx"', () => {

    const props = {
        url: 'https://www.pinterest.com/pin/753508581394702754/',
        title: 'Dragon Ball',
        username: 'MKMastersu'
    };

    test('Debe mostrar <GifGridItem /> correctamente.', () => {
        const wrapper = shallow(<GifGridItem {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

});
