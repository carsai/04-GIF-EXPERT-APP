import React, { useState } from 'react';

import { AddCategory } from './components/AddCategory';
import { GifGrip } from './components/GifGrip';

export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['One Punch']);

    return (
        <>
            <h2>GifExperApp</h2>

            <AddCategory setCategorias={setCategorias} />

            <hr/>

            <ol>
                {
                    categorias.map( c => 
                            <GifGrip 
                                category={c} 
                                key={c}
                            />
                        )
                }
            </ol>
        </>
    );
}