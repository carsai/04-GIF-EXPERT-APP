import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';

import { GifGripItem } from '../../components/GifGripItem';

describe('Pruebas con el componente <GifGripItem />', () => {
    
    const title = 'Titulazooo';
    const url    = 'https://media0.giphy.com/media/xjb8iUCuPBKGqbuw4D/giphy.gif?cid=59b9c425y7lgnw8oq5bxgq8i0uo5gda2cow1k871q1h4al39&rid=giphy.gif';
    
    const wrapper = shallow(<GifGripItem title={title} url={url} />);

    test('Debe mostrar el componente GifGripItem correctamente ', () => {

        expect(wrapper).toMatchSnapshot();
        
    });

    test('Debe tener un <p> con el "title"', () => {

        const pText = wrapper.find('p').text().trim();
        
        expect(pText).toBe(title);
        
    });

    test('Debe tener in <img> con "src" y "alt" valido', () => {

        const {src, alt} = wrapper.find('img').props();

        expect(src).toBe(src);
        expect(alt).toBe(title);
        
    });

    test('<div> debe tener la clase "animate__bounce"', () => {

        const div = wrapper.find('div');

        expect(div.hasClass('animate__bounce')).toBe(true);
        
    })
        
});
