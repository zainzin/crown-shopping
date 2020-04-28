import React from 'react';
import { connect } from "react-redux";
import { toggleCartMenu } from "../../state/cart/cart.actions";
import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg";

import "./cart-icon.styles.scss";


const CartIcon = ({toggleCartMenu, itemCount}) => (
    <div className="cart-icon" onClick={toggleCartMenu}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapStateToProps = (state) => {
    return {
        itemCount: state.cart.cartItems.reduce((accu, next) => accu + next.quantity, 0)
    }
}

export default connect(mapStateToProps, {toggleCartMenu})(CartIcon);