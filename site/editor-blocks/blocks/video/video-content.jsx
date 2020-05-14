import React from 'react'
import { useStyles } from './styles'
import ReactPlayer from 'react-player'

const VideoContent = ({ url }) => {
  const classes = useStyles()
  return (
    <div className={classes.insertBlock}>
      <div className={classes.insertWrapper}>
        <div className={classes.insertContent}>
          <ReactPlayer
            className={classes.reactPlayer}
            height="100%"
            width="100%"
            url={url}
            controls
          />
        </div>
      </div>
    </div>
  )
}

export { VideoContent }
