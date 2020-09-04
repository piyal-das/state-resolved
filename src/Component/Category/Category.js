import React from 'react';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

const Category = (props) => {
    const {count} = props;
    return (
        <div>
            <h2> Select your Category </h2> 
            <CategoryDetail count = {count}></CategoryDetail>
        </div>
    );
};

export default Category;