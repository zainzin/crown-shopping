import React, {Component} from 'react';
import { connect } from "react-redux";
import {addItem} from '../../state/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

class CollectionItem extends Component {
  render() {
    const { id, name, price, imageUrl, addItem } = this.props;
    return (
      <div className='collection-item'>
        <div
          className='image'
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
        />
        <div className='collection-footer'>
          <span className='name'>{name}</span>
          <span className='price'>{price}</span>
        </div>
        <CustomButton inverted onClick={() => addItem({id, name, price, imageUrl})}> Add to cart </CustomButton>
      </div>
    );
  }
}

export default connect(null, {addItem})(CollectionItem);
