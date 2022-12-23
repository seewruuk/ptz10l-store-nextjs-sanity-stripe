import React from 'react'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { useStateContext } from './../context/StateContext';


const Navbar = () => {

  const { setShowCart, totalQuantities } = useStateContext();

  return (
    <div className='navbar-container'>
      <div className='cart-button'>
        <div>

          <button type="button" className='cart-icon' onClick={() => setShowCart((prev) => !prev)}>
            <HiOutlineShoppingBag />
            <span className='cart-item-qty'>{totalQuantities}</span>
          </button>
        </div>

      </div>
    </div>
  )
}

export default Navbar