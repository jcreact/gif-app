import React from 'react';

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
