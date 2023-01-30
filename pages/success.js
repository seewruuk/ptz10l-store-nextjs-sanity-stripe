import Link from 'next/link'
import React, { useEffect } from 'react'
import { useStateContext } from './../context/StateContext';
import { runFireworks } from './../lib/utils';

const Success = () => {


    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

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
                <p>Twoje zamówienie jest w trakcie realizacji</p>
                <p>W razie wszelkich pytań zapraszam do kontaktu:</p>

                <p>
                    <a class="email-ref" href="mailto:nowakowskimarcel01@gmail.com">
                        <u>nowakowskimarcel01@gmail.com</u>
                    </a>
                </p>
                <div style={{ marginTop: "50px" }}>
                    <Link href="/">
                        <button type="button" className="button-back-to-mail-page">
                            Powrót do strony głównej
                        </button>
                    </Link>
                </div>

            </div>
        </div>

    )
}

export default Success