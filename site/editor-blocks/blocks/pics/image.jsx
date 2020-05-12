import React from 'react'
import { ReactEditor, useEditor, useSelected, useFocused } from 'slate-react'
import { useStyles } from './styles'
import { PanoramaOutlined } from '@material-ui/icons'
import {
  usePopupState,
  bindTrigger,
  bindPopover,
} from 'material-ui-popup-state/hooks'
import { Transforms } from 'slate'
import PopperDialog from '../PopperDialog'
import imageExtensions from 'image-extensions'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'
import isUrl from 'is-url'
import { Resizable } from 're-resizable'

export default props => {
  const editor = useEditor()
  const { element, children, attributes } = props
  const { url } = element
  const isEmpty = !url
  const classes = useStyles({ isEmpty })
  const selected = useSelected()
  const focused = useFocused()

  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'demoPopper',
  })

  const [inputVal, setInputVal] = React.useState('')
  const [activeIndex, setActiveIndex] = React.useState(1)
  const [submitLoading, setSubmitLoading] = React.useState(false)
  const fileInputElment = React.createRef()

  const handleImgUpload = async event => {
    const files = [...event.target.files]
    if (files.length === 0) return
    await setSubmitLoading(true)
    const result = await Promise.all(
      files.map(file => {
        let imgUrl = url
        if (window.createObjectURL !== undefined) {
          imgUrl = window.createObjectURL(file)
        } else if (window.URL !== undefined) {
          imgUrl = window.URL.createObjectURL(file)
        } else if (window.webkitURL !== undefined) {
          imgUrl = window.webkitURL.createObjectURL(file)
        }
        return imgUrl
      })
    )
    insertImage(result)
    popupState.setOpen(false)
  }

  const insertImage = imageUrl => {
    const path = ReactEditor.findPath(editor, element)
    Transforms.setNodes(editor, { url: imageUrl }, { at: path })
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
        alert('please enter a valid pic link')
      }
    }
  }

  const renderBottomLine = () => {
    return <div className={classes.loadLine} />
  }

  const handleImgClick = () => {
    if (selected && focused) {
      return <div className={classes.clickCover} />
    } else {
      return null
    }
  }

  const handleImgDoubleClick = () => {
    alert('here should be a raw picture!')
  }

  const ImageContent = () => {
    return (
      <div
        {...attributes}
        contentEditable={false}
        style={{
          display: 'flex',
          boxSizing: 'border-box',
          outline: 'none',
          position: 'relative',
          overflow: 'hidden',
          flexGrow: 1,
        }}
      >
        <div
          style={{
            boxSizing: 'border-box',
            position: 'relative',
            cursor: 'pointer',
            width: '100%',
            height: '100%',
          }}
        >
          <embed
            onClick={handleImgClick}
            onDoubleClick={handleImgDoubleClick}
            src={url}
            style={{
              width: '100%',
              display: 'block',
              borderRadius: '1px',
              objectFit: 'cover',
              pointerEvents: 'auto',
            }}
          />
        </div>
      </div>
    )
  }

  const addClearButton = () => {
    if (inputVal !== '') {
      return (
        <div
          onClick={() => setInputVal('')}
          role="button"
          style={{
            borderRadius: '50%',
            cursor: 'pointer',
            opacity: 0.5,
          }}
        >
          x
        </div>
      )
    } else {
      return null
    }
  }

  return (
    <div {...attributes} contentEditable={false} className={classes.imageRepo}>
      {!url && (
        <div className={classes.imageBlock}>
          <div className={classes.imageContent}>
            <div
              role="button"
              className={classes.imageButton}
              {...bindTrigger(popupState)}
            >
              <PanoramaOutlined className={classes.imageIcon} />
              <span className={classes.imageText}>Add an Image</span>
            </div>
          </div>
        </div>
      )}
      {url && (
        <Resizable
          className={classes.imgInsert}
          enable={{ left: true, right: true }}
        >
          <ImageContent />
        </Resizable>
      )}
      {children}
      <PopperDialog {...bindPopover(popupState)}>
        <Tabs>
          <div className={classes.imgCard}>
            <div className={classes.wrapper}>
              <div className={classes.menuTabs}>
                <TabList className={classes.tabList}>
                  <Tab
                    style={{
                      outline: 'none',
                    }}
                    key={1}
                    onClick={() => setActiveIndex(1)}
                  >
                    <div className={classes.tabPosition}>
                      <div className={classes.tabTitle} role="button">
                        Upload
                      </div>
                      {activeIndex === 1 ? renderBottomLine() : null}
                    </div>
                  </Tab>
                  <Tab
                    style={{ outline: 'none' }}
                    key={2}
                    onClick={() => setActiveIndex(2)}
                  >
                    <div className={classes.tabPosition}>
                      <div className={classes.tabTitle} role="button">
                        Embed link
                      </div>
                      {activeIndex === 2 ? renderBottomLine() : null}
                    </div>
                  </Tab>
                </TabList>
              </div>
            </div>
            <div className={classes.cardContent}>
              <TabPanel>
                <div className={classes.uploadWrapper}>
                  <input
                    type="file"
                    hidden
                    ref={fileInputElment}
                    accept=".jpg, .jpeg, .png, .gif, .svg"
                    onChange={event => handleImgUpload(event)}
                  />
                  <div
                    className={classes.uploadButton}
                    role="button"
                    tabIndex="0"
                    onClick={() => {
                      fileInputElment.current.click()
                    }}
                  >
                    Choose an image
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className={classes.inputWrapper}>
                  <div className={classes.inputContent}>
                    <input
                      type="url"
                      onChange={e => setInputVal(e.target.value)}
                      onKeyDown={onKeyDown}
                      value={inputVal}
                      className={classes.inputItem}
                      placeholder="Paste the image link"
                      autoFocus
                    />
                    {addClearButton()}
                  </div>
                </div>
                <div className={classes.embedWrapper}>
                  <div
                    className={classes.embedButton}
                    role="button"
                    tabIndex="0"
                    onClick={handleClick}
                  >
                    Embed link
                  </div>
                </div>
                <div className={classes.supportTypes}>
                  <div className={classes.typesContent}>
                    Works with any image from the web
                  </div>
                </div>
              </TabPanel>
            </div>
          </div>
        </Tabs>
      </PopperDialog>
    </div>
  )
}
