/* eslint-disable array-callback-return */
import React, { useContext, useState } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

export const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
  return (
    <div className='cartItems'>
      <div className='cartItems-format-main'>
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return <div>
            <div className="cartItems-format cartItems-format-main">
              <img src={e.image} alt="" className='cartItems-product-icon' />
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <button className='cartItems-quantity'>{cartItems[e.id]}</button>
              <p>{e.new_price * cartItems[e.id]}</p>
              <img className='cartItems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
            </div>
            <hr />
          </div>
        }
        return null;
      })}
      <div className="cartItems-down">
        <div className="cartItems-total">
          <h2>Cart Totals</h2>
          <div>
            <div className='cartItems-total-item'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartItems-total-item">
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartItems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartItems-promocode">
          <p>If you have promo code, Enter it here</p>
          <div className='cartItems-promobox'>
            <input type="text" placeholder='Promo Code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems
