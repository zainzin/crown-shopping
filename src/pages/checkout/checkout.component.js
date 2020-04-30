import React from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartItemsTotalPrice } from "../../state/cart/cart.selectors";

import './checkout.styles.scss';

const Checkout = ({cartItems, totalPrice}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(item => 
                <CheckoutItem key={item.id} cartItem={item} />
            )
        }

        <div className='total'>
            <span>TOTAL ${totalPrice}</span>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectCartItemsTotalPrice
});

export default connect(mapStateToProps)(Checkout);