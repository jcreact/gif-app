
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [category, setCategory] = useState('');

    const handleChange = e => {
        setCategory(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if( category && category.trim() ){
            setCategories(cats => [...cats, category]);
            setCategory('');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="mt-3">
                <input 
                    className="form-control" 
                    type="text" 
                    value={category} 
                    onChange={handleChange}
                />
            </form>
        </>
    );
};


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};