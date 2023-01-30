import Link from 'next/link'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion';


const PolitykaWysylki = () => {



    return (
        <>
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
                <h1>Polityka wysyłek</h1>
                <div style={{ marginTop: "50px" }}>
                    <Link href="/">
                        <button type="button" className="button-back-to-mail-page">
                            Powrót do strony głównej
                        </button>
                    </Link>
                </div>
                <div>
                    <ol>
                        <li>
                            Nasza firma korzysta z usług kurierskich firmy DPD. Dokładny regulamin wysyłek kurierskich tego przewoźnika znajdą Państwo
                            <Link href="https://www.dpd.com/pl/pl/regulaminy-dpd-pickup/">tutaj</Link>
                        </li>
                        <li>
                            dostępniamy następujące metody wysyłki do klienta:
                            <ul>
                                <li>Przesyłka Kurierem DPD - 14,00 zł brutto</li>
                                <li>Przesyłka za pobraniem Kurierem DPD - 19,00 zł brutto</li>
                            </ul>
                        </li>
                        <li>
                            Dokładamy najwyższych starań by Państwa zamówienia były realizowane w przeciągu 2-3 dni od momentu zaksięgowania wpłaty na naszym koncie bankowym.
                        </li>
                        <li>
                            Nie mamy wpływu na opóźnienia wynikające ze strony przewoźnika, dlatego nie może być to jakąkolwiek podstawą roszczeń względem sprzedającego.
                        </li>
                        <li>
                            Aktualny status przesyłki będzie wysyłany do Państwa za pośrednictwem drogi elektronicznej na adres e-mail podany w zamówieniu.
                        </li>
                        <li>
                            Wszystkie wysyłki realizowane są wyłącznie na terenie Rzeczpospolitej Polskiej.
                        </li>
                        <li>
                            W razie pytań związanych z przesyłkami proszę pisać na email: nowakowskimarcel01@gmail.com lub dzwonić na numer telefonu: 515555372
                        </li>

                    </ol>
                </div>
                <div>

                </div>

            </motion.div>
        </>
    )
}

export default PolitykaWysylki