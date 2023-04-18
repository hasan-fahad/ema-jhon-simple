import React from 'react';
import './Product.css'
const Product = (props) => {
    const {img, name, seller, ratings, price} = props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <div className='product-info-rating'>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} stars</p>

                </div>
            
            </div>
            <div>
                <button className='btn-add-to-cart'>Add to Cart</button>
            </div>
            

        </div>
    );
};

export default Product;