import React from 'react'
import { useStyles } from './styles'
import { useSelected, useFocused } from 'slate-react'
import { Resizable } from 're-resizable'
import { LeftResizer } from '../customize-handles/left-resizer'
import { RightResizer } from '../customize-handles/right-resizer'

const ImageContent = ({ url, onDoubleClick }) => {
  const selected = useSelected()
  const focused = useFocused()
  const classes = useStyles()
  return (
    <Resizable
      className={classes.imgInsert}
      enable={{ left: true, right: true }}
      handleComponent={{ left: <LeftResizer />, right: <RightResizer /> }}
    >
      <div className={classes.imgContentBlock}>
        <div className={classes.imgContentWrapper}>
          <img
            src={url}
            className={classes.imgContent}
            onDoubleClick={onDoubleClick}
          />
        </div>
      </div>
    </Resizable>
  )
}

export { ImageContent }
