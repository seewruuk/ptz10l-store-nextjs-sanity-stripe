import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useEffect } from 'react'


const DaneKontaktowe = () => {


    return (
        <motion.div className='policy-template'
            initial={{
                opacity: 0,
                y: 200,
            }}
            animate={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 1.5
                }
            }}
            exit={{
                y: -200,
                opacity: 0,
            }}
        >
            <h1>Dane Kontaktowe</h1>
            <div>
                    <Link href="/">
                        <button type="button" className="button-back-to-mail-page">
                            Powrót do strony głównej
                        </button>
                    </Link>
                </div>
            <div>
                Wszelkie pytania prosimy kierować na
                <p>
                    <Link href="mailto:nowakowskimarcel01@gmail.com">
                        nowakowskimarcel01@gmail.com
                    </Link>
                </p>

                <p>Sprawdź folder SPAM lub OFERTY przed ponownym wysłaniem wiadomości.</p>
            </div>
        </motion.div>
    )
}

export default DaneKontaktowe