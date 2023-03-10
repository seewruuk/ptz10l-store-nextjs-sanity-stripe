import React, { useState, useEffect, useRef } from 'react'
import { useStateContext } from './../context/StateContext';
import { createOrder } from './../lib/orderHandler';
import getStripe from '../lib/getStripe';
import toast from 'react-hot-toast';
import { Router, useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';




const Checkout = () => {

    const router = useRouter();

    const { cartItems, totalPrice, setShowCart, setCartItems } = useStateContext();
    const [showForm, setShowForm] = useState(false);
    const [disabled, setDisabled] = useState(false);


    useEffect(() => {
        setDisabled(false)
        setShowCart(false)
    }, [])




    const [formState, setFormState] = useState({});
    const handleFormChange = (event) =>
        setFormState({
            ...formState, [event.target.name]: event.target.value
        })

    const submitHandler = async (event) => {
        setDisabled(true)
        console.log("Zamówienie złożone")

        event.preventDefault();


        emailjs.sendForm(


            'service_5ylj1zv',
            'template_fefuijs',
            form.current,
            'NLFbDWeI5XzAlxCvx'
        ).then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });


        const first = cartItems.find((a) => a._id === 'c6929922-c05a-4580-b7f4-b5cf2faad30a')
        const second = cartItems.find((a) => a._id === '79c3757c-78b9-440b-b8d2-e4dbb2baf42c')


        const firstItem = first ? first.quantity : 0;
        const secondItem = second ? second.quantity : 0;

        const total = totalPrice + 19;
        const id = await createOrder({ ...formState, total, firstItem, secondItem })

        setCartItems([]);
        router.push('/success');

        console.log("Sanity order place", id)
    }


    const handleCheckout = async () => {
        const stripe = await getStripe();

        const response = await fetch('/api/stripe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cartItems),
        });
        console.log(cartItems)
        if (response.statusCode === 500) return;

        const data = await response.json();
        toast.loading('Ładowanie systemu płatności...');


        stripe.redirectToCheckout({ sessionId: data.id });
    }
    const handleShowFormChange = (event) => {
        event.preventDefault();
        if (showForm) {
            setShowForm(false)
        } else {
            setShowForm(true)
        }
    }

    const form = useRef();





    return (

        <>
            <motion.div className='switch-book-container' initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 1,
                        duration: 0.5
                    }
                }}
            >
                <button className='button-switch-book' onClick={() => router.push('/')}>Strona główna</button>
            </motion.div>
            <div className='checkout-container'>
                <div className='checkout-wrapper'>
                    <div className="checkout-option1">
                        <div>
                            <h1>Zapłać za pobraniem</h1>
                            <h2 className='checkout-price'>Całkowity koszt: <span style={{ fontWeight: "bold" }}>{
                                totalPrice + 19
                            } PLN </span> </h2>
                            <button type='button' className='button-pay-with-stripe' onClick={handleShowFormChange}>
                                {
                                    showForm ? `Ukryj formularz` : `Pokaż formularz`
                                }
                            </button>
                        </div>
                        <div className='form-content'>
                            <motion.form onSubmit={submitHandler} initial={{
                                height: showForm ? "100%" : "0"
                            }}
                                animate={{
                                    height: showForm ? "100%" : "0",
                                    transition: {
                                        duration: 0.65,
                                    }
                                }}
                                ref={form}

                            >
                                <div className="formFlex">
                                    <input type="text" name="firstname" placeholder='Imię' required value={formState.firstname} onChange={handleFormChange} />
                                    <input type="text" name="secondname" placeholder='Nazwisko' required value={formState.secondname} onChange={handleFormChange} />
                                </div>
                                <div className='formFlex' >
                                    <input type="text" name="email" placeholder='Adres email' required value={formState.email} onChange={handleFormChange} />
                                    <input type="text" name="phone" placeholder='Numer telefonu' required value={formState.phone} onChange={handleFormChange} />
                                </div>
                                <div className="formFlex">
                                    <input type="text" name="address" placeholder='Ulica' required value={formState.address} onChange={handleFormChange} />
                                    <input type="text" name="number" placeholder='Numer budynku' required value={formState.number} onChange={handleFormChange} />
                                    <input type="text" name="apartment" placeholder='Numer lokalu' value={formState.apartment} onChange={handleFormChange} />
                                </div>
                                <div className="formFlex">
                                    <input type="text" name="postcode" placeholder='Kod pocztowy' required value={formState.postcode} onChange={handleFormChange} />
                                    <input type="text" name="city" placeholder='Miasto' required value={formState.city} onChange={handleFormChange} />
                                </div>
                                <div className="formFlex">
                                    <textarea name="warning" value={formState.warning} placeholder='uwagi' onChange={handleFormChange}></textarea>
                                </div>
                                <input type="submit"
                                    value={
                                        disabled ? "Wysyłanie" : "Prześlij"
                                    }
                                    disabled={disabled ? "disabled" : null}

                                />
                            </motion.form>
                        </div>
                    </div>

                    <div className="checkout-option2">
                        <h1>Zapłać Online</h1>
                        <h2 className='checkout-price'>Całkowity koszt: <span style={{ fontWeight: "bold" }}>{
                            totalPrice + 14
                        } PLN </span> </h2>
                        <button type='button' className='button-pay-with-stripe' onClick={handleCheckout}>
                            Przejdź do płatności
                        </button>

                    </div>
                </div>
            </div>
        </>



    )
}

export default Checkout