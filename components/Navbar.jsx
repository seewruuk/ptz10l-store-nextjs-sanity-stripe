import React from 'react'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { useStateContext } from './../context/StateContext';


const Navbar = () => {

  const { setShowCart, totalQuantities, toggleProductId } = useStateContext();

  return (
    <div className='navbar-container'>
      <div>
        <button className='button-switch-book' onClick={() => toggleProductId()}>Zmień książkę</button>
      </div>
      <div className='cart-button'>

        <button type="button" className='cart-icon' onClick={() => setShowCart((prev) => !prev)}>
          <HiOutlineShoppingBag />
          <span className='cart-item-qty'>{totalQuantities}</span>
        </button>

      </div>
    </div>
  )
}

export default Navbar