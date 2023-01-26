import React, { useState, useEffect } from 'react'
import { useStateContext } from './../context/StateContext';
import { createOrder } from './../lib/orderHandler';
import getStripe from '../lib/getStripe';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';



const Checkout = () => {

    const router = useRouter();

    const { cartItems, totalPrice, setShowCart, setCartItems } = useStateContext();

    useEffect(() => {
        return () => {
            setShowCart(false)
        }
    }, [])


    const [formState, setFormState] = useState({});
    const handleFormChange = (event) =>
        setFormState({
            ...formState, [event.target.name]: event.target.value
        })

    const submitHandler = async (event) => {

        event.preventDefault();

        const firstItem = cartItems[0] && cartItems[0].quantity
        const secondItem = cartItems[1] && cartItems[1].quantity

        const total = totalPrice;
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

    return (
        <div className='checkout-container'>
            <div className='checkout-wrapper'>

                <div className="checkout-option1">
                    <div>
                        <h1>Zapłać za pobraniem</h1>
                        <h2 className='checkout-price'>Całkowity koszt: <span style={{fontWeight: "bold"}}>{
                            totalPrice + 19
                        } PLN </span> </h2>
                    </div>
                    <div className='form-content'>
                        <form onSubmit={submitHandler}>
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
                                <input type="text" name="apartment" placeholder='Numer lokalu' required value={formState.apartment} onChange={handleFormChange} />
                            </div>
                            <div className="formFlex">
                                <input type="text" name="postcode" placeholder='Kod pocztowy' required value={formState.postcode} onChange={handleFormChange} />
                                <input type="text" name="city" placeholder='Miasto' required value={formState.city} onChange={handleFormChange} />
                            </div>
                            <div className="formFlex">
                                <textarea name="warning" placeholder='uwagi'></textarea>
                            </div>
                            <input type="submit" value="Złóż zamówienie" />




                        </form>
                    </div>
                </div>

                <div className="checkout-option2">
                    <h1>Zapłać Online</h1>
                    <h2 className='checkout-price'>Całkowity koszt: <span style={{fontWeight: "bold"}}>{
                            totalPrice + 16
                        } PLN </span> </h2>
                    <button type='button' className='button-pay-with-stripe' onClick={handleCheckout}>
                        Przejdź do płatności
                    </button>
                </div>
            </div>
        </div>


    )
}

export default Checkout