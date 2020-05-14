import React from 'react'
import { useStyles } from './styles'

const ImageContent = ({ url, onDoubleClick }) => {
  const classes = useStyles()
  return (
    <div className={classes.imgContentBlock}>
      <div className={classes.imgContentWrapper}>
        <img
          src={url}
          className={classes.imgContent}
          onDoubleClick={onDoubleClick}
        />
      </div>
    </div>
  )
}

export { ImageContent }
