import React from 'react';
import PropTypes from 'prop-types';

/**
 * Tarjeta para muestrar un gif.
 *
 * @param {string} props.url Es la URL de la imagen o gif (requerido).
 * @param {string} props.title Es el título de la imagen o gif (requerido).
 * @param {string} props.username Es el creador de la imagen o gif.
 * @returns {JSX.Element} Renderización HTML del componente.
 *
 * @author José Palma
 * @version 1.0.0
 */
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

// Especificación de tipos de las propiedades.
GifGridItem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    username: PropTypes.string,
};

// Valor por defecto de las propiedades.
GifGridItem.defaultProps = {
    username: 'Desconocido',
};
