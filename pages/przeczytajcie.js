import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useStateContext } from './../context/StateContext';


const Czerwona = () => {

    const router = useRouter();
    const {setProductId} = useStateContext()

    useEffect(() => {
        var r = document.querySelector(':root');
        setProductId(0)
        r.style.setProperty('--themeColor', '#f41e46');
        r.style.setProperty('--circleColor', '#FF9BA5');

        router.push('/');

    }, [])

    return (
        <div
            style={{
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                height: "100%",
                width: "100%",
                background: "white"
            }}
        ></div>
    )
}

export default Czerwona