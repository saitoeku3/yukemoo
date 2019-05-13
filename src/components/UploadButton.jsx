import React, { useContext } from 'react'
import styled from 'styled-components'
import { Fab } from '@material-ui/core'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import { rootContext } from '../context'

export const UploadButton = () => {
  const { dispatch } = useContext(rootContext)

  const setImageUrl = files => {
    const createObjectURL =
      (window.URL || window.webkitURL).createObjectURL || window.createObjectURL
    const imageUrl = files.length === 0 ? '' : createObjectURL(files[0])
    dispatch({
      type: 'SET_IMAGE_URL',
      value: imageUrl
    })
  }

  return (
    <div>
      <Input id="icon-button-file" type="file" onChange={e => setImageUrl(e.target.files)} />
      <label htmlFor="icon-button-file">
        <Fab color="primary" component="span">
          <CloudUploadIcon />
        </Fab>
      </label>
    </div>
  )
}

const Input = styled.input`
  display: none;
`
