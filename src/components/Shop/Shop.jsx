import React, { useEffect, useState } from 'react';
import './Shop.css';

const Shop = () => {
const [products, setProducts] = useState([]);

useEffect( () => {
    fetch('products.json')
    .then(res =>res.json())
    .then(data => setProducts(data))
},[])

    return (
        <div className='shop-container'>
            <div className='products-container'>
                <h4>Primary Products: {products.length}</h4>
            </div>
                       
            <div className='order-container'>
            <h4>Order Summary</h4>
            </div>
            
        </div>
    
        
    );
};

export default Shop;