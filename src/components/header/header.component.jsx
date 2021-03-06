import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';
import { selectHidden } from "../../state/cart/cart.selectors";
import { userSelector } from "../../state/user/user.selectors";
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import './header.styles.scss';

const Header = ({ currentUser, cartHidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {
      cartHidden ? null : <CartDropDown />
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: userSelector,
  cartHidden: selectHidden
});

export default connect(mapStateToProps)(Header);
