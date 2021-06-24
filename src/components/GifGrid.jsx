import React from 'react';
import PropTypes from 'prop-types';

// Componentes
import { GifGridItem } from './GifGridItem.jsx';
import { Spinner } from './Spinner.jsx';

// Custom Hooks
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
    const { data: images, loading } = useFetchGifs(category);

    const showImages = () =>
        images.map((img) => <GifGridItem key={img.id} {...img} />);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <Spinner />}
            <div className="row row-cols-sm-2 row-cols-lg-4 g-4">
                {showImages()}
            </div>
        </>
    );
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
};
