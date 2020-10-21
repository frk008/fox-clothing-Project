import React from 'react';
import SHOP_DATA from './shopdata'
import Preview from '../../components/preview-collection/preview-collection.component';


class ShopPage extends React.Component {
    constructor() {
        super();
        this.state = {
            collections: SHOP_DATA,
        }
    }
    render() {
        const { collections } = this.state;
        return (<div>
            {
                collections.map(({ id, ...othersection }) => <Preview key={id} {...othersection} />)
            }
        </div>
        )
    }
}

export default ShopPage;