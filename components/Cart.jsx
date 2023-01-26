import React, { useEffect, useRef, useState } from 'react'
import { useStateContext } from '../context/StateContext';
import { AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai'
import { urlFor } from '../lib/client';
import getStripe from '../lib/getStripe';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import Link from 'next/link'
import { useRouter } from 'next/router';


const Cart = () => {

  const { setShowCart, cartItems, totalQuantities, totalPrice, onRemove, showCart } = useStateContext();

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width, height
    }
  }

  function useWindowDimensions() {


    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {

      function handleResize() {
        setWindowDimensions(getWindowDimensions)
      }

      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)

    }, [])

    return windowDimensions;
  }

  const router = useRouter();


  const { width } = useWindowDimensions()

  const isMobile = width <= "1100" ? true : false;


  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cartItems),
    });
    console.log(cartItems)
    if (response.statusCode === 500) return;

    const data = await response.json();
    toast.loading('Ładowanie systemu płatności...');


    stripe.redirectToCheckout({ sessionId: data.id });
  }


  const item = {
    hidden: { x: "100%" },
    show: {

      x: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
        stiffness: 400
      },
    },
    exit: {
      opacity: 0,
      x: '100%',
      transition: {
        ease: "easeInOut",
        duration: 0.8,
        stiffness: 400
      },
    },
  };



  return (
    <motion.div className='cart-wrapper'
      initial={{
        background: "rgba(0, 0, 0, 0)",
      }}
      animate={{
        background: isMobile ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0.8)",
      }}

      exit={{
        background: "rgba(0, 0, 0, 0)",
      }}
    >
      <motion.div className='cart-container' variants={item} initial="hidden" animate="show" exit="exit">

        <div className='cart-info'>
          <span className='cart-close-menu' onClick={() => setShowCart(false)}><AiOutlineLeft /></span>
          <h5>Twój koszyk</h5>
          <span>
            ({totalQuantities})
          </span>
        </div>

        <div className='cart-content'>

          {cartItems.length < 1 &&
            (
              <div className='empty-cart'>
                <AiOutlineShopping size={60} />
                <h5>Twój koszyk jest pusty</h5>
              </div>
            )}


          {
            cartItems.length >= 1 && cartItems.map((item) => (
              <div className='product' key={item._id}>

                <div className='product-image'>
                  <img src={urlFor(item.image[0])} />
                </div>

                <div className='product-details'>

                  <div className='product-details-top'>
                    <div className='product-title'>{item.name}</div>
                    <div className='product-price'>{item.price} PLN</div>
                  </div>


                  <div className='product-details-bottom'>
                    <div>Ilość: {item.quantity}</div>
                    <div onClick={() => onRemove(item)}>Usuń</div>
                  </div>


                </div>

              </div>

            ))}


        </div>

        <div className='cart-subtotal'>
          <div className='subtotal-top'>
            <div>
              <h5>Podusmowanie*</h5>
              <span>*koszt wysyłki w następnym kroku</span>
            </div>


            <div>
              <h5>{totalPrice} PLN</h5>
            </div>
          </div>


          <div className='subtotal-bottom'>
            <Link href={`${ cartItems.length == 0 ? '/' : '/checkout' }`}
            >
              <button type='button' className='button-pay-with-stripe'>
                Przejdź do płatności
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Cart