import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ({ url, title, username }) => {
    return (
        <article className="col animate__animated animate__fadeIn">
            <div className="card h-100">
                <img src={url} alt={title} className="card-card-img-top" />
                <section className="card-body">
                    <p>{title}</p>
                </section>
                <section className="card-footer">
                    <small className="text-muted">Autor: {username}</small>
                </section>
            </div>
        </article>
    );
};

GifGridItem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    username: PropTypes.string,
};

GifGridItem.defaultProps = {
    username: 'Desconocido',
};
