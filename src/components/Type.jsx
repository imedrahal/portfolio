import React from 'react'
import Typewriter from 'typewriter-effect'

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          'Full Stack javascript Developer 💻',
          'Web and MOBILE Developer',
          'Hard Worker 😌',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default Type