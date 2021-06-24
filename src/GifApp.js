import React, { useState } from 'react';

const GifApp = () => {

    // const categories = ['Dragon Ball', 'One Punch', 'Akame Ga Kill'];
    const [categories, setCategories] = useState(['Dragon Ball', 'One Punch', 'Akame Ga Kill']);

    const handleAdd = () => {
        setCategories(cats => [...cats, 'Hi-Man']);
    };

    return (
        <>
            <h2 className="mt-3">| Gif App</h2>
            <hr />
            <button className="btn btn-primary" onClick={handleAdd}>Agregar</button>
            <ol className="mt-2">
                {
                    categories.map(cat => {
                        return <li key={cat}>{cat}</li>;
                    })
                }
            </ol>
        </>
    );
};

export default GifApp;