import { createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
};

const shopSelect = state => state.shop;

export const shopSelectCollections = createSelector(
    [shopSelect],
    (shop) => shop.collections
);

export const selectCollection = param => createSelector(
    [shopSelectCollections],
    (collections) => collections.find((collection) => collection.id === COLLECTION_ID_MAP[param])
    );