import React from 'react'
import './cart.scss'
import { DeleteOutlineRounded } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, resetCart } from '../Store/CartSlice'
import {loadStripe} from '@stripe/stripe-js';
import { makeRequest } from '../../makeRequest'

const Cart = () => {
    let dispatch = useDispatch();

    const products = useSelector((state)=> state.cart?.products)

   const totalPrice = () => {
    let total = 0;
    products.forEach((product)=> {
        total += product.quantity * product.price
    })
    return total.toFixed(2)
   }

  //  const stripePromise = loadStripe('pk_test_51O5qbYIYuur9q7uyzDT9TftoOjr03364WGsOecWPxc5hAc9TgMutSFeguEshNynSjWoTKPKAkspKffX4ohWFFimb00hglHixp6');
   
  //  const handlePayment = async () => {
  //   try {
  //     const stripe = await stripePromise;
  //     const res = await makeRequest.post("/orders", {
  //       products,
  //     });
  //     await stripe.redirectToCheckout({
  //       sessionId: res.data.stripeSession.id,
  //     });

  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div className='cart'>
        <h2 className='title'>Products in your cart</h2>
        {products?.map((item, index)=> (
            
            <div className='item' key={index}>
                <div className="left">
                    <img src={item.img} alt="" />
                </div>

                <div className="center">
                    <h3 className='title'>
                        {item.title.slice(0,16)}
                    </h3>
                    <p className='discipstion'>
                         {item.disc}
                    </p>
                    <div className="price">
                        {`${item.quantity} × $${item.price}`}
                    </div>
                </div>

                <div className="right">
                    <DeleteOutlineRounded className='del' onClick={()=> dispatch(removeItem(item.id))} />
                </div>
            </div>
            
        ))}

        <div className="total">
            <span>Total Price</span>
            <span>${totalPrice()}</span>
        </div>
        <button className='btn'>PREOCEED TO CHECKOUT</button>
        <span className='reset' onClick={()=> dispatch(resetCart())}>Reset Cart</span>
    </div>
  )

}

export default Cart