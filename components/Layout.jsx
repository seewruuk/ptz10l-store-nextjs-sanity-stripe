import React from 'react'

import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer';
import Cart from './Cart';
import { useStateContext } from './../context/StateContext';
import { AnimatePresence, motion } from 'framer-motion';





const Layout = ({ children }) => {

  const { showCart, setLoader, loader, startAnimation } = useStateContext();


  setTimeout(() => {
    setLoader(false)
  }, 5000);


  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <title>Przeczytaj to za 10 lat</title>
      </Head>
      <script src="https://smtpjs.com/v3/smtp.js">
      </script>

      <motion.main className='main-container'>
        {/* ANIMACJA */}
        <motion.div className='switch-product-component'
          initial={{
            width: startAnimation ? "100%" : "0"
          }}
          animate={{
            width: startAnimation ? "100%" : "0%",
            transition: {
              duration: 1,
              ease: [0.65, -0.05, 0.01, 0.96],
            }
          }}
        >
        </motion.div>

        <header>
          <Navbar />
        </header>
        <div>

          <AnimatePresence>
            {
              showCart && (
                <motion.div key='loader'>
                  <Cart />
                </motion.div>
              )
            }

          </AnimatePresence>


          {children}

        </div>
        <footer>
          <Footer />
        </footer>
      </motion.main>
    </>
  )
}

export default Layout