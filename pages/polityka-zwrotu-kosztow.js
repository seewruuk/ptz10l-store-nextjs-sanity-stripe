import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useEffect } from 'react'


const PolitykaKosztow = () => {



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
            <h1>Polityka zwrotu kosztów: </h1>
            <Link href="/">
                <button type="button" className="button-back-to-mail-page">
                    Powrót do strony głównej
                </button>
            </Link>
            <div>
                <ol>
                    <li>Zwrotu towaru możesz dokonać w ciągu 14 dni od dnia otrzymania przesyłki.</li>
                    <li>Odsyłany towar musi być nowy, pozbawiony śladów użytkowania, zabrudzeń, zapachów.</li>
                    <li>W ciągu 30 dni roboczych od daty odebrania twojego zwrotu, otrzymasz od nas zwrot płatności.</li>
                    <li>Zwrócimy Ci równowartość ceny odesłanego towaru bez kosztów przesyłki.</li>
                </ol>
            </div>
            <div>

                <h3>Adres do zwrotów:</h3>
                <p>Marcel Nowakowski</p>
                <p>Oraczewice 99a</p>
                <p>73-200 Oraczewice</p>

            </div>

        </motion.div>
    )
}

export default PolitykaKosztow