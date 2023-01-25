import React, { useState } from 'react'
import { useStateContext } from './../context/StateContext';


const Checkout = () => {

    const {cartItems} = useStateContext();

    const [formState, setFormState] = useState({});
    const handleFormChange = (event) =>
        setFormState({
            ...formState, [event.target.name]: event.target.value
        })


    const submitHandler = () => {
        const config = {
            SecureToken: '47394084-d1b2-4cae-919e-21341d2855ec',
            To: 'laczekktorylubiczekolade@gmail.com',
            From: formState.email,
            Subject: formState.name,
            Body: "jebac policje"
        }


        if(window.Email){
            window.Email.send(config).then(() => alert("message sent"));
        }
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <input placeholder='Imię i nazwisko' required type="name" name="name" value={formState.name} onChange={handleFormChange} />
                <input placeholder='Adress zamieszkania' type="address" name="address" value={formState.address} onChange={handleFormChange} />
                <input placeholder='Adres email' type="email" name="email" value={formState.email} onChange={handleFormChange} />
                <input placeholder='Numer telefonu' type="phone" name="phone" value={formState.phone} onChange={handleFormChange} />
                <input type="submit" value="submit" />
            </form>
        </>
    )
}

export default Checkout