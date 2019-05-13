import React, { useContext } from 'react'
import styled from 'styled-components'
import { rootContext } from '../context'
import { ImageWithSteam } from './ImageWithSteam'
import { Fab } from './Fab'

export const App = () => {
  const { state } = useContext(rootContext)
  return (
    <Wrapper>
      <Fab />
      {state.imageUrl && <ImageWithSteam />}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  background-color: #222222;
`
