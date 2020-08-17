import React, { useEffect, useState } from 'react'
import { GifGripItem } from './GifGripItem';
import { getGifs } from '../helpers/getGifs';

export const GifGrip = ({category}) => {

    const [images, setImages] = useState([])
    
    useEffect(() => {
        getGifs(category)
            .then(setImages);
    }, [category]);    

    return (
        <>
            <h3>{category}</h3> 
            <div className='card-grid'>
            {
                    images.map(img => <GifGripItem 
                            key={img.id} 
                            {...img}
                        />)
            }
            </div>
        </>
    )
}
