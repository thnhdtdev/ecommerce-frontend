import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'


export const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    return (
        <div className='productDisplay'>
            <div className="productDisplay-left">
                <div className='productDisplay-img-list'>
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productDisplay-img">
                    <img className='productDisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className='productDisplay-right'>
                <h2>{product.name}</h2>
                <div className="productDisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(199)</p>
                </div>
                <div className="productDisplay-right-prices">
                    <div className="productDisplay-right-price-old">
                        ${product.old_price}
                    </div>
                    <div className="productDisplay-right-price-new">
                        ${product.new_price}
                    </div>
                </div>
                <div className="productDisplay-right-des">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae consequatur tenetur ut officiis nulla a tempora vel cupiditate commodi laborum minima suscipit, doloremque repellat officia accusamus asperiores voluptatum aut sit?
                </div>
                <div className="productDisplay-right-size">
                    <h2>Select Size</h2>
                    <div className='productDisplay-right-sizes'>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => { addToCart(product.id) }}>ADD TO CARD</button>
                <p className='productDisplay-right-category'><span>Category: </span>Women, T-Shirt, Crop-Top</p>
                <p className='productDisplay-right-category'><span>Tags: </span>Modern, Latest</p>
            </div>
        </div>
    )
}
