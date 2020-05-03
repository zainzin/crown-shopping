import { createSelector } from 'reselect';

const shopSelect = state => state.shop;

export const shopSelectCollections = createSelector(
    [shopSelect],
    (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [shopSelectCollections],
    (collections) => Object.keys(collections).map((k) => collections[k])
);

export const selectCollection = param => createSelector(
    [shopSelectCollections],
    (collections) => collections[param]
);