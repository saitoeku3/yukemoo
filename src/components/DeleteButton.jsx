import React, { useContext } from 'react'
import { Fab } from '@material-ui/core'
import ClearIcon from '@material-ui/icons/Clear'
import { rootContext } from '../context'

export const DeleteButton = () => {
  const { dispatch } = useContext(rootContext)

  const clearImageUrl = () => {
    dispatch({
      type: 'CLEAR_IMAGE_URL'
    })
  }

  return (
    <div>
      <Fab component="span" onClick={clearImageUrl} style={styles}>
        <ClearIcon />
      </Fab>
    </div>
  )
}

const styles = {
  opacity: 0.3
}
