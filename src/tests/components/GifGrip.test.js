import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';

import { GifGrip } from '../../components/GifGrip';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas con <GifGrip />', () => {
    
    const categoria = 'One Punch';    
    
    test('Debe mostrar el componente correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrip category={categoria} />);
        expect(wrapper).toMatchSnapshot();
        
    });
    
    test('Debe de mostrar items cuando hay una imagen usando useFetchGifs', () => {

        const data = [
            {
                id: '1234567',
                title: 'titulo GIF',
                url: 'https://localhost:8080/quesito.gif'
            },
            {
                id: '987654',
                title: 'titulo GIF 2',
                url: 'https://localhost:8080/quesito2.gif'
            }
        ];
        
        useFetchGifs.mockReturnValue({
            data,
            loading: false
        });
        
        const wrapper = shallow(<GifGrip category={categoria} />);

        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGripItem').length).toBe(data.length);
        
    });
    
});
