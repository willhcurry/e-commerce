import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../collection-page/collection-page';


const ShopPage = ({ match }) => (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={ CollectionsOverview } />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
);



export default ShopPage;