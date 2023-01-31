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
        <></>
    )
}

export default Czerwona