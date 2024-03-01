import React from 'react'
import './RelatedProduct.css'
import data_products from '../Assets/data'
import Item from '../Item/Item'

export const RelatedProduct = () => {
    return (
        <div className='relatedProduct'>
            <h2>Related Products</h2>
            <hr />
            <div className='relatedProduct-items'>
                {data_products.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default RelatedProduct
