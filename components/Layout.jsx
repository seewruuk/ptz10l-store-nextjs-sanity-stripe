import React from 'react'

import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer';
import Cart from './Cart';
import { useStateContext } from './../context/StateContext';
import { AnimatePresence, motion } from 'framer-motion';





const Layout = ({ children }) => {

  const { showCart, setLoader, loader } = useStateContext();


  setTimeout(() => {
    setLoader(false)
  }, 5000);


  return (
    <div>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />
        <title>Przeczytaj to za 10 lat</title>
      </Head>


      <motion.main className='main-container'>
        <header>
          <Navbar />
        </header>
        <AnimatePresence>
          {
            showCart && (
              <motion.div key='loader'>
                <Cart />
              </motion.div>
            )
          }
        </AnimatePresence>

        <AnimatePresence>
          <motion.div key="loader2">
            {children}
          </motion.div>
        </AnimatePresence>

        <footer>
          <Footer />
        </footer>
      </motion.main>
    </div>
  )
}

export default Layout