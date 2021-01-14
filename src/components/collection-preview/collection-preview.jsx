import React from 'react';
import CollectionItem from '../collecction-item/collection-item';
import './collection-preview.scss';

const CollectionPreview = ({title,items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.yoUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((item, idx) => idx < 4)
                .map(({id, ...otherItemProps}) => (
                    <CollectionItem Key={id} {...otherItemProps} />
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;