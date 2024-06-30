import React, { useContext } from 'react'
import './CartItems.css'
import {ShopContext} from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_icon.png'

const CartItems = () => {
    const {getTotalCartAmout,all_product,cartItems,removeFromCart} = useContext(ShopContext)
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
      <hr />
     {all_product.map((e)=>{
            if(cartItems[e.id]>0)
                {
                    return <div>
                    
                    <div className="cartitems-format">
                        <img src={e.image} alt="" />
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                        <p>${e.new_price*cartItems[e.id]}
                        </p>
                        <img src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                    </div>
                    <hr />
                  </div>

     }
          
     })}


     <div className="cartitems-down">
      <div className="cartitems-total">
        <h1>Cart Totals</h1>
        <div>
          <div className="cartitems-total-item">
            <p>Subtotal</p>
            <p>${getTotalCartAmout()}</p>
          </div>
          <hr />
          <div className='cartitems-total-item'>
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="cartitems-total-item">
            <h3>TOtal</h3>
            <h3>${getTotalCartAmout()}</h3>
          </div>
          <button>PROSEED TO CHECKOUT</button>
        </div>
        <div className='cartitems-promocode'>
          <p>If you have a promo code,Enter it hare</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder='promo code'/>
            <button>Submit</button>
          </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default CartItems
