import React from 'react';
import {connect} from 'react-redux';
import { selectCollection } from "../../state/shop/shop.selector";
import './collection.styles.scss';

import CollectionItem from "../../components/collection-item/collection-item.component";

const Collection = ({collection}) => (
        <div className="category">
            <h2>COLLECTION PAGE</h2>
        </div>
    );

const mapStateToProps = (state, ownProps) => {
    return {
        collection: selectCollection(ownProps.match.params.collectionId)(state)
    }
}

export default connect(mapStateToProps)(Collection);