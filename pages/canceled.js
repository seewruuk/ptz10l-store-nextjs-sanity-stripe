import Link from 'next/link'
import React, { useEffect } from 'react'
import { useStateContext } from './../context/StateContext';


const CanceledPage = () => {

    return (

        <div className='success-page-wrapper'>
            <div className='success-page-container'>
                <h1>Zgubiłeś sie?</h1>
                <Link href="/">
                    <button type="button" className="button-back-to-mail-page">
                        Powrót do strony głównej
                    </button>
                </Link>

            </div>
        </div>
    )
}

export default CanceledPage