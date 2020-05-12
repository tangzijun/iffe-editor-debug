import React from 'react'
import { ReactEditor, useEditor } from 'slate-react'
import { useStyles } from '../styles/econtent'
import { Transforms } from 'slate'
import imageExtensions from 'image-extensions'
import isUrl from 'is-url'

const Econtent = () => {
  const editor = useEditor()
  const classes = useStyles()
  const [inputVal, setInputVal] = React.useState('')

  const insertImage = () => {
    const path = ReactEditor.findPath(editor, element)
    Transforms.setNodes(editor, { url: inputVal }, { at: path })
  }

  const isImageUrl = url => {
    if (!url) return false
    if (!isUrl(url)) return false
    const ext = new URL(url).pathname.split('.').pop()
    return imageExtensions.includes(ext)
  }

  const handleClick = () => {
    if (isImageUrl(inputVal)) {
      insertImage(inputVal)
      setInputVal('')
      popupState.setOpen(false)
    } else {
      alert('please enter a valid link')
    }
  }

  const onKeyDown = event => {
    if (event.key === 'Enter') {
      if (isImageUrl(inputVal)) {
        insertImage(inputVal)
        setInputVal('')
        popupState.setOpen(false)
      } else {
        alert('please enter a valid link')
      }
    }
  }

  return (
    <div className="eroot">
      <div className={classes.inputWrapper}>
        <div className={classes.inputContent}>
          <input
            type="search"
            onChange={e => setInputVal(e.target.value)}
            onKeyDown={onKeyDown}
            className={classes.inputItem}
            placeholder="Paste a file link"
            autoFocus
          />
        </div>
      </div>
      <div className={classes.embedWrapper}>
        <div
          className={classes.embedButton}
          onClick={handleClick}
          role="button"
          tabIndex="0"
        >
          Embed link
        </div>
      </div>
      <div className={classes.supportTypes}>
        <div className={classes.typesContent}>
          Works with any image from the web
        </div>
      </div>
    </div>
  )
}

export default Econtent
