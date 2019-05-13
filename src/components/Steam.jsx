import React from 'react'
import styled from 'styled-components'
import steam from '../steam.svg'

export const Steam = () => (
  <SteamImage
    src={steam}
    style={{
      left: `${Math.round(Math.random() * 40)}vw`,
      top: `${Math.round(Math.random() * 40)}vh`
    }}
  />
)

const SteamImage = styled.img`
  filter: blur(30px);
  opacity: 0.9;
  position: absolute;
  z-index: 0;
`
