import '@testing-library/jest-dom';

import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGifs', () => {

    const categoria = 'One Punch';
   
    test('Debe retornar el estado inicial', async () => {        
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs(categoria));
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBeTruthy();
        
    });
    
    test('Debe retornar un array de imagenes y loading debe ser false', async () => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs(categoria));
        await waitForNextUpdate();
        
        const { data, loading } = result.current;

        expect(data.length).toBe(10);
        expect(loading).not.toBeTruthy();
        
    });
    
});
