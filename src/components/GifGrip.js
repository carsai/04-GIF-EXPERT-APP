import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGripItem } from './GifGripItem';

export const GifGrip = ({category}) => {

    const {data, loading} = useFetchGifs(category);     

    return (
        <>
            <h3 className='animate__animated animate__bounce'>{category}</h3> 
            {loading && <p className='animate__animated animate__flash'>cargando</p>}
            <div className='card-grid'>
            {
                    data.map(img => <GifGripItem 
                            key={img.id} 
                            {...img}
                        />)
            }
            </div>
        </>
    )
}
