import React, { createContext, useContext, useState } from 'react'
import { toast } from 'react-hot-toast';

const Context = createContext();

export const useStateContext = () => useContext(Context);

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [qty, setQty] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [productId, setProductId] = useState(1);
    const [startAnimation, setStartAnimation] = useState(false);

    const [loader, setLoader] = useState(true);


    let foundProduct;
    let index;

    const toggleProductId = () => {

        setStartAnimation(true)

        setTimeout(() => {
            setQty(1);
            console.log('button clicked')
            var r = document.querySelector(':root');
            if (productId == 1) {
                setProductId(0)
                r.style.setProperty('--themeColor', '#f41e46');
                r.style.setProperty('--circleColor', '#FF9BA5');

            } else {
                setProductId(1)
                r.style.setProperty('--themeColor', '#AE92CB');
                r.style.setProperty('--circleColor', '#AE92CB');
            }
            setStartAnimation(false)
        }, 1000);
    }



    const onAdd = (product, quantity) => {

        const checkProductInCart = cartItems.find((item) => item._id === product._id);
        setTotalPrice((prevTotalPrice) => {
            return Number((prevTotalPrice + product.price * quantity).toFixed(2))
        }
        )
        setTotalQuantities((prevTotalQuantity) => prevTotalQuantity + quantity);


        if (checkProductInCart) {

            const newState = cartItems.map((cartProduct) => {
                if(cartProduct._id === product._id){
                    return{
                        ...cartProduct,
                        quantity: cartProduct.quantity + quantity
                    };
                }
                return cartProduct
            });
            setCartItems(newState);
            
        } else {
            product.quantity = quantity;

            setCartItems([...cartItems, { ...product }]);
        }
        toast.success(`Pomyślnie dodano do koszyka`);
    }


    const onRemove = (product) => {
        foundProduct = cartItems.find((item) => item._id === product._id)
        const newCartItems = cartItems.filter((item) => item._id !== product._id);
        setTotalPrice((prevTotalPrice) => {
            let newPrice;

            newPrice = prevTotalPrice;
            if(newPrice - Number((prevTotalPrice - foundProduct.quantity * foundProduct.price).toFixed(2)) < 0){
                return 0;
            }
            return Number((prevTotalPrice - foundProduct.quantity * foundProduct.price).toFixed(2))
        })

        setTotalQuantities((prevTotalQuantity) => prevTotalQuantity - foundProduct.quantity)
        setCartItems(newCartItems)
        toast.error(`Usunięto produkt z koszyka`);

    }



    const toggleCartItemQuantity = (id, value) => {
        foundProduct = cartItems.find((item) => item._id === id)
        index = cartItems.findIndex((product) => product._id === id)

        const newCartItems = cartItems.filter((item) => item._id !== id);
        if (value === 'inc') {

            setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 }])
            setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
            setTotalQuantities((prevTotalQty) => prevTotalQty + 1)
        } else if (value === 'dec') {
            if (foundProduct.quantity > 1) {
                setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 }])
                setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
                setTotalQuantities((prevTotalQty) => prevTotalQty - 1)
            }
        }
    }

    const buyNowButton = (product, quantity) => {
        onAdd(product, quantity);
        setShowCart(true)

    }


    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
    }
    const descQty = () => {
        setQty((prevQty) => {
            if (prevQty - 1 < 1) return 1;
            return prevQty - 1
        }
        );
    }

    return (
        <Context.Provider
            value={
                {
                    showCart,
                    cartItems,
                    totalPrice,
                    totalQuantities,
                    qty,
                    loader,
                    productId,
                    startAnimation,
                    setProductId,
                    toggleProductId,
                    setLoader,
                    incQty,
                    descQty,
                    onAdd,
                    setShowCart,
                    toggleCartItemQuantity,
                    onRemove,
                    setCartItems,
                    setTotalPrice,
                    setTotalQuantities,
                    buyNowButton,
                }
            }
        >
            {children}
        </Context.Provider>
    )
}
