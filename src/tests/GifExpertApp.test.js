import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';

import { GifExpertApp } from '../GifExpertApp';

describe('Pruebas con <GifExpertApp />', () => {
    
    test('Debe mostrar el componente correctamente', () => {
        
        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de mostrar una lista de categorias', () => {

        const categorias = ['One Punch', 'Goku'];

        const wrapper = shallow(<GifExpertApp defaultCategoria={categorias}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrip').length).toBe(categorias.length);
        
    });
    
    
});
