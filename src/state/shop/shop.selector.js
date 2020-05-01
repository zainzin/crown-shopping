import { createSelector } from 'reselect';

const shopSelect = state => state.shop;

export const shopSelectCollections = createSelector(
    [shopSelect],
    (shop) => shop.collections
);