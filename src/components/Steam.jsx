import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import steam from '../steam.svg'

export const Steam = ({ count, num }) => {
  const [left, setLeft] = useState(0)
  const [top, setTop] = useState(0)

  useEffect(() => {
    setLeft(Math.round(Math.random() * 40))
    setTop(Math.round(Math.random() * 40))
  }, [])

  const displayStyle = useMemo(() => {
    return {
      display: num <= count || 'none'
    }
  }, [count, num])

  return (
    <SteamImage
      src={steam}
      style={{
        left: `${left}vw`,
        top: `${top}vh`,
        ...displayStyle
      }}
    />
  )
}

const SteamImage = styled.img`
  filter: blur(30px);
  opacity: 0.9;
  position: absolute;
  z-index: 0;
`
