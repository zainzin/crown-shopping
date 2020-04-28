import React from "react";
import {connect} from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';


const CartDropDown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.map(c => <CartItem key={c.id} item={c} />)}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = (state) => {
    return {
        cartItems: state.cart.cartItems
    }
};

export default connect(mapStateToProps)(CartDropDown);