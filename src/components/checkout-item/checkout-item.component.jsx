import React from 'react';
import { connect } from "react-redux";
import { clearItemFromCart, addItem, removeItem } from "../../state/cart/cart.actions";
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItemFromCart, addItem, removeItem}) => {
  const { id, name, imageUrl, price, quantity } = cartItem;
  return (
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='item' />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>
      <div onClick={() => removeItem(cartItem)} className='arrow'>&#10094;</div>
      <div className='value'>{quantity}</div>
      <div onClick={() => addItem(cartItem)} className='arrow'>&#10095;</div>
    </span>
    <span className='price'>{price}</span>
    <div onClick={() => clearItemFromCart(id)} className='remove-button'>&#10005;</div>
  </div>
  )};

export default connect(null, {clearItemFromCart, addItem, removeItem})(CheckoutItem);