import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { GifGridItem } from './GifGridItem.jsx';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs(category).then(setImages);
    }, [category]);

    return (
        <>
            <h3>{category}</h3>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
                {images.map((image) => (
                    <GifGridItem key={image.id} {...image} />
                ))}
            </div>
        </>
    );
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
};
