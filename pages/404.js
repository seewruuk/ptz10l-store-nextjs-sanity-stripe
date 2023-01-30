import Link from 'next/link'
import React, { useEffect } from 'react'
import { Router, useRouter } from 'next/router';

const Products = () => {
  const router = useRouter();

  useEffect(() => {
    
    router.push('/');
  }, [])
  


  return (
    <div className='success-page-wrapper'>
     
    </div>
  )
}

export default Products