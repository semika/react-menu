import React from "react";

const Category  = ({ categories, filterItemsMethod}) => {

    return(
        <div className="btn-container">
            {
                categories.map((category, index) => {
                    return (
                        <button key={index} 
                                className="filter-btn" 
                                onClick={() => { filterItemsMethod(category)}}>{category}</button>
                    );
                })
            }
        </div>
    );
}

export default Category;