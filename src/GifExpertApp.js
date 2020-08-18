import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { AddCategory } from './components/AddCategory';
import { GifGrip } from './components/GifGrip';

export const GifExpertApp = ({defaultCategoria=[]}) => {

    const [categorias, setCategorias] = useState(defaultCategoria);

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

GifExpertApp.propTypes = {
    defaultCategoria: PropTypes.array
}