import React from 'react';
import { shallow } from 'enzyme';

import { AddCategory } from '../../components/AddCategory.jsx';

describe('Pruebas en el componente "AddCategory.jsx".', () => {


    const setCategories = jest.fn();
    let component = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('Debe mostrar <AddCategory /> correctamente.', () => {
        expect(component).toMatchSnapshot();
    });

    test('No debe manejar el submit del formulario para una cadena vacia.', () => {
        component.find('form').simulate('submit', { preventDefault() { } });
        expect(setCategories).not.toBeCalled();
    });

    test('Debe manejar los cambios en el input.', () => {
        const input = component.find('input');
        const target = {
            value: 'hola'
        };
        input.simulate('change', { target });

        // Revisa que el valor del input sea igual a 'hola'.
        expect(component.find('input').prop('value')).toBe(target.value);
    });

    test('Debe manejar el submit del formulario y limpiar el input.', () => {
        const target = { value: 'happy' };
        component.find('input').simulate('change', { target });
        component.find('form').simulate('submit', { preventDefault() { } });

        // Revisar que setCategories se haya llamado
        expect(setCategories).toBeCalled();
        // Revisar que el setCategories se haya llamado con una función de argumento.
        expect(setCategories).toBeCalledWith(expect.any(Function));
        // Que el valor del input haya quedado en blanco.
        expect(component.find('input').prop('value')).toBe('');
    });


});
