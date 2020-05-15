import React from 'react'
import { useStyles } from './styles'
import ReactPlayer from 'react-player'
import { Resizable } from 're-resizable'
import { LeftResizer } from '../customize-handles/left-resizer'
import { RightResizer } from '../customize-handles/right-resizer'

const VideoContent = ({ url }) => {
  const classes = useStyles()
  return (
    <Resizable
      defaultSize={{ width: 576 }}
      className={classes.videoInsert}
      enable={{ left: true, right: true }}
      handleComponent={{ left: <LeftResizer />, right: <RightResizer /> }}
    >
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
    </Resizable>
  )
}

export { VideoContent }
