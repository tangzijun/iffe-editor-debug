import React from 'react'
import { useStyles } from '../styles/ucotent'

const Ucontent = () => {
  const classes = useStyles()
  return (
    <div className={classes.uploadWrapper}>
      <div className={classes.uploadButton} role="button" tabIndex="0">
        Choose an image
      </div>
    </div>
  )
}

export default Ucontent
