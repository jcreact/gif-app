import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Componentes
import { AddCategory } from './components/AddCategory.jsx';
import { GifGrid } from './components/GifGrid.jsx';

/**
 * Componente principal de la aplicación.
 * 
 * @param {string[]} props.list Una lista de categorías iniciales. 
 * @returns {JSX.Element} Renderización HTML del componente.
 *
 * @author José Palma
 * @version 1.0.0
 */
export const GifApp = ({ list }) => {

    const [categories, setCategories] = useState(list);

    return (
        <>
            <h2 className="mt-3">Gif App</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            {
                categories.map(cat => <GifGrid key={cat} category={cat} />)
            }
        </>
    );
};

// Especificación de tipos de las propiedades.
GifApp.propTypes = {
    list: PropTypes.arrayOf(PropTypes.string)
};

// Valor por defecto de las propiedades.
GifApp.defaultProps = {
    list: ['Dragon Ball']
};