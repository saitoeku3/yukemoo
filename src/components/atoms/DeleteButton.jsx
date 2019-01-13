import React, { useContext } from 'react'
import { Store } from '../../store/context'

import { Fab } from '@material-ui/core'
import ClearIcon from '@material-ui/icons/Clear'

export const DeleteButton = () => {
  const { dispatch } = useContext(Store)

  const clearImageUrl = () => {
    dispatch({
      type : 'CLEAR_IMAGE_URL'
    })
  }

  return (
    <div>
      <Fab
        component="span"
        onClick={clearImageUrl}
        style={styles}
      >
        <ClearIcon />
      </Fab>
    </div>
  )
}

const styles = {
  opacity: 0.3
}
