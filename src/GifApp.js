import React, { useState } from 'react';

import { AddCategory } from './components/AddCategory.jsx';
import { GifGrid } from './components/GifGrid.jsx';

export const GifApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

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