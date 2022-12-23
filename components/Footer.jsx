import React, { useRef } from 'react'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { client } from '../lib/client';
import { getStaticProps } from '../pages';




const Footer = () => {



  return (
    <div className='footer-container'>
      <div className='top'>
        <div><Link href="https://fesru.pl/">by @seewruuk</Link></div>
        <div>
          <Link href="https://www.facebook.com/Przeczytaj-to-za-10-lat-100974929434722">
            <FaFacebookF />
          </Link>

          <Link href="https://www.instagram.com/przeczytajtoza10lat/">
            <FaInstagram />
          </Link>

          <Link href="https://www.tiktok.com/@przeczytajtoza10lat?lang=pl-PL">
            <FaTiktok />
          </Link>
        </div>
      </div>
      <div className='bottom'>
        <div className='policy'>
          <Link href={`/polityka-zwrotu-kosztow`}>
            Polityka zwrotu kosztów
          </Link>
          <Link href="/polityka-wysylki">
            Polityka wysyłki
          </Link>
          <Link href="/polityka-prywatnosci">
            Polityka prywatności
          </Link>
          <Link href="/warunki-swiadczenia-uslug">
            Warunki świadczenia usług
          </Link>
          <Link href="/nota-prawna">
            Nota prawna
          </Link>
          <Link href="/dane-kontaktowe">
            Dane kontaktowe
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer



