import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';

import { AddCategory } from '../../components/AddCategory';

describe('Pruebas con el componente <AddCategory />', () => {

    const setCategorias = jest.fn();

    let wrapper = shallow(<AddCategory setCategorias = {setCategorias} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategorias = {setCategorias} />);
    });
    
    test('Debe mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });
    
    test('Debe cambiar el input', () => {

        const value = 'One Punch';

        wrapper.find('input').simulate('change', {target:{value}});
        
        expect(wrapper.find('input').prop('value')).toBe(value);

    });
    
    test('No debe hacer el submit si no tiene valor', () => {

        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect(setCategorias).not.toHaveBeenCalled();
        
    });

    test('Debe de llamar el "setCategorias" y limpiar la caja de texto', () => {

        const value = 'One Punch';

        wrapper.find('input').simulate('change', {target:{value}});
        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect(setCategorias).toHaveBeenCalled();
        expect(setCategorias).toHaveBeenCalledTimes(1);
        expect(setCategorias).toHaveBeenCalledWith(expect.any(Function));
        expect(wrapper.find('input').prop('value')).toBe('');
        
    });    
    
});
