import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetail = (props) => {
    const {count} = props;
    const category = useContext(CategoryContext)
    return (
        <div>
            <h6> This is a CategoryDetail : {category} </h6>
        </div>
    );
};

export default CategoryDetail;