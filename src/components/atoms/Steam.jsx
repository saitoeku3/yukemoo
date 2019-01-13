import React from 'react'
import styled from 'styled-components'
import steam from '../../assets/images/steam.svg'

export const Steam = () => {
  const randomNum = Math.round(Math.random() * 50)
  const randomNum2 = Math.round(Math.random() * 50)

  return (
    <SteamImage
        src={steam}
        style={{
          left: `${randomNum}vw`,
          top: `${randomNum2}vh`
        }}
      />
  )
}
const SteamImage = styled.img`
  filter: blur(30px);
  opacity: 0.7;
  position: absolute;
  z-index: 0;
`
