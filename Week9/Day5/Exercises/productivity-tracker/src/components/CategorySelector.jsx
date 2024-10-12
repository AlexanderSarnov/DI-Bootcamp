// src/components/CategorySelector.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedCategory } from '../features/state/slice';

const CategorySelector = () => {
    const categories = useSelector((state) => state.categories);
    const selectedCategoryId = useSelector((state) => state.selectedCategoryId);
    const dispatch = useDispatch();

    const handleCategoryChange = (event) => {
        dispatch(setSelectedCategory(Number(event.target.value)));
    };

    return (
        <div>
            <h2>Category Selector</h2>
            <select onChange={handleCategoryChange} value={selectedCategoryId || ''}>
                <option value="">Select a category</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CategorySelector;
