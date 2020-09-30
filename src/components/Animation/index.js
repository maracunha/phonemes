import React from 'react';
import Lottie from 'react-lottie';
import heart from '../../assets/animations/love-hearts.json'


function Animation () {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: heart,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  return (
    <Lottie 
      options={defaultOptions}
    />
  )
}

export default Animation;
