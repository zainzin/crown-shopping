import React, { Component } from 'react';
import { Route } from "react-router-dom";
import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import Collection from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionsWithSpinner = WithSpinner(Collection);

class ShopPage extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };

    setTimeout(() => this.setState({
      loading: false
    }), 1000);  
  }
  
  render() { 
    const {loading} = this.state;
    const {match} = this.props;
    return (
  <div className='shop-page'>
    <Route exact path={`${match.path }`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
    <Route path={`${match.path}/:collectionId`} redner={(props) => <CollectionsWithSpinner isLoading={loading} {...props} />} />
  </div>
  )}
}

export default ShopPage;
