import '@testing-library/jest-dom';

import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifs', () => {
    
    test('Debe traer 10 elementos si se informa una categoria', async () => {

        const gifs = await getGifs('One Punch');

        expect(gifs.length).toBe(10);
        
    });

    test('No debe traer elementos si no se informa la categoria', async () => {

        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);
        
    });
    
});
