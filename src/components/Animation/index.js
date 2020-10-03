import React from 'react';
import Lottie from 'react-lottie';

const animations = {
  school: require('../../assets/animations/back-to-scool.json'),
  bell: require('../../assets/animations/bell-icon.json'),
  girl: require('../../assets/animations/girl-on-the-bicycle.json'),
  heart: require('../../assets/animations/love-hearts.json'),
  job: require('../../assets/animations/love-your-job.json'),
  love: require('../../assets/animations/love.json'),
  illustration: require('../../assets/animations/nepenthe-illustration.json'),
}

const animationsLength = Object.keys(animations).length
const randomKeyAnimation = Math.floor(Math.random() * animationsLength)
const currentAnimation = Object.keys(animations)[randomKeyAnimation]

function Animation () {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animations[currentAnimation],
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
