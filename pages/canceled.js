import Link from 'next/link'
import React, { useEffect } from 'react'


const CanceledPage = () => {

    useEffect(() => {
        return () => {
            var r = document.querySelector('.button-switch-book');
            r.style.setProperty('opacity', '0');
            setShowCart(false)
        }
    }, [])

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