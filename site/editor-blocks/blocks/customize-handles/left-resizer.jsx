import React from 'react'
import { useStyles } from './l-styles'

const LeftResizer = () => {
  const classes = useStyles()
  return (
    <div className={classes.leftHandle}>
      <div className={classes.leftHandleWrapper}>
        <div className={classes.leftHandleContent} />
      </div>
    </div>
  )
}

export { LeftResizer }
