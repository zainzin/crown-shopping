import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import { shopSelectCollections } from "../../state/shop/shop.selector";

import CollectionPreview from '../../components/collection-preview/collection-preview';

const ShopPage = ({collections}) => (
  <div className='shop-page'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: shopSelectCollections
})

export default connect(mapStateToProps)(ShopPage);
