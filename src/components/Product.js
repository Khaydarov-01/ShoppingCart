import React from 'react';

const Product = ({product, onAdd}) => {
    return (
        <div>
            <img className='small' src={product.image} alt="img" />
            <h3>{product.name}</h3>
            <small>${product.price}</small>
            <div>
                <button onClick={() => onAdd(product)}>Add to Cart</button>
            </div>
         </div>
    );
};

export default Product;