import React from 'react'
import { useStyles } from './r-styles'

const RightResizer = () => {
  const classes = useStyles()
  return (
    <div className={classes.rightHandle}>
      <div className={classes.rightHandleWrapper}>
        <div className={classes.rightHandleContent} />
      </div>
    </div>
  )
}

export { RightResizer }
