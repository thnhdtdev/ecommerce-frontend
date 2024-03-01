import React from 'react'
import './NewsLetter.css'


export const NewsLetter = () => {
    return (
        <div className='newsletter'>
            <h2>Get Exclusive Ofeers On Your Email</h2>
            <p>Subcribe to our newsletter and stay updated</p>
            <div>
                <input type="email" placeholder='Your Email ID' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}
