import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BsBagCheckFill } from 'react-icons/bs';
import { useStateContext } from './../context/StateContext';
import { runFireworks } from './../lib/utils';

const Success = () => {

    const { setCartItems, setTotalPrice, setTotalQuantities, setLoader } = useStateContext();

    useEffect(() => {
        return () => {
            localStorage.clear();
            setCartItems([]);
            setTotalPrice(0);
            setTotalQuantities(0);
            runFireworks();
        }
    }, [])



    return (


        <div className='success-page-wrapper'>
            <div className='success-page-container'>
                <h3>Marcel Nowakowski</h3>
                <h1>Dziękuje za złożenie zamówienia!</h1>
                <p>W wiadomości email otrzymasz szczegóły dotyczące swojego zamówienia.</p>
                <p>W razie wszelkich pytań zapraszam do kontaktu:</p>

                <p>
                    <a class="email-ref" href="mailto:nowakowskimarcel01@gmail.com">
                        <u>nowakowskimarcel01@gmail.com</u>
                    </a>
                </p>
                <Link href="/">
                    <button type="button" className="button-back-to-mail-page">
                        Powrót do strony głównej
                    </button>
                </Link>

            </div>
        </div>







        // <div className='success-wrapper'>
        //     <div className='success'>
        //         <p className='icon'>{BsBagCheckFill}</p>
        //         <h2>Thank you for your order</h2>
        //         <p className='email-msg'>Check your email inbox for the receipt.</p>
        //         <p className='description'>


        //             If you have any question please email
        //             <a className='email' href="mailto:sewruczekk@icloud.com">
        //                     sewruczekk@icloud.com
        //             </a>
        //         </p>
        //     </div>
        // </div>
    )
}

export default Success