import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

export const CartItem = (props) => {
    const {id, name, price, quantityInStock, description, productimage} = props.data
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
  return (
    <div className='cartItem'> 
        <img src={productimage} />
        <div className='description'>
            <p><b> {name} </b></p>
            <p> ${price} </p>
            <p>{quantityInStock} </p>
            <p> {description} </p>
        </div>
        <div className='countHandler'>
            <button onClick={() => removeFromCart(id)}> - </button>
            <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
            <button onClick={() => addToCart(id)}> + </button>
        </div>
    </div>
  )
}
