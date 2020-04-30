import React from "react";
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from "../../state/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { toggleCartMenu } from '../../state/cart/cart.actions';
import './cart-dropdown.styles.scss';


const CartDropDown = ({cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                cartItems.map(c => <CartItem key={c.id} item={c} />)
                : <span className="empty-message">Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartMenu());
            
        }}>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropDown));