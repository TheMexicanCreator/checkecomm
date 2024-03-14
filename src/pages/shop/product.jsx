import React, { useContext } from 'react';
import './shop.css';
import { ShopContext } from '../../context/shop-context';

export const Product = (props) => {
    const {id, name, price, quantityInStock, description, productimage} = props.data
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemAmount = cartItems[id];
  return (
    <div className='product'>
        <img src={productimage} />
        <div className='description'>
            <p><b> {name} </b></p>
            <p> ${price} </p>
            <p>{quantityInStock} </p>
            <p> {description} </p>
        </div>
        <button className='addToCartBttn' onClick={() => addToCart(id)}> Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>} </button>
    </div>
  )
}
