import React from 'react'
import '../styles/style.css'



import { StateContext } from './../context/StateContext';
import { Toaster } from 'react-hot-toast';
import Layout from './../components/Layout';
import { AnimatePresence } from 'framer-motion';



function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <StateContext>
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </StateContext>
    </AnimatePresence>
  )
}

export default MyApp
