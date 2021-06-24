import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Formulario (con un input) para agregar una nueva categoría a la lista.
 *
 * @param {React.Dispatch<React.SetStateAction<string[]>>} props.setCategories función para agregar nuevas categorías.
 * @returns {JSX.Element} Renderización HTML del componente.
 *
 * @author José Palma
 * @version 1.0.0
 */
export const AddCategory = ({ setCategories }) => {
    const [category, setCategory] = useState('');

    /**
     * Maneja el evento 'onChange' del 'input'.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} evt Evento OnChange del Input.
     */
    const handleChange = (evt) => {
        setCategory(evt.target.value);
    };

    /**
     * Maneja el evento 'onSubmit' del formulario.
     *
     * @param {React.FormEvent<HTMLFormElement>} evt Evento OnSubmit del formulario.
     */
    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (category && category.trim()) {
            setCategories((cats) => [category, ...cats]);
            setCategory('');
        }
    };

    return (
        <>
            <form onSubmit={(evt) => handleSubmit(evt)} className="mt-3">
                <input
                    className="form-control"
                    type="text"
                    value={category}
                    onChange={(evt) => handleChange(evt)}
                />
            </form>
        </>
    );
};

// Especificación de tipos de las propiedades.
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
};
