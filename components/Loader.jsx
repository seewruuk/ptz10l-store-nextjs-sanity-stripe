import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion';
import Lottie from 'lottie-react-web';


import animationData from '../components/animation/przeczytajto.json'
import { useLottie, useLottieInteractivity } from 'lottie-react';



const Loader = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,

    };

    return (
        <>
            <Lottie options={defaultOptions}
                height="100vh"
                width="100%"
            >

            </Lottie>
        </>
    )
}

export default Loader