import React, { useState } from 'react';

import { AddCategory } from './components/AddCategory.jsx';

export const GifApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    return (
        <>
            <h2 className="mt-3">Gif App</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categories.map(cat => {
                        return <li key={cat}>{cat}</li>;
                    })
                }
            </ol>
        </>
    );
};