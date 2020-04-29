import React from 'react';
import { connect } from "react-redux";
import { toggleCartMenu } from "../../state/cart/cart.actions";
import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg";
import { selectCartItemsCount } from '../../state/cart/cart.selectors';
import "./cart-icon.styles.scss";
import { createStructuredSelector } from "reselect";

const CartIcon = ({toggleCartMenu, itemCount}) => (
    <div className="cart-icon" onClick={toggleCartMenu}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, {toggleCartMenu})(CartIcon);