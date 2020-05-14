import React from 'react'
import { useStyles } from './styles'
import { MovieFilter } from '@material-ui/icons'
import { ReactEditor, useEditor } from 'slate-react'
import {
  usePopupState,
  bindTrigger,
  bindPopover,
} from 'material-ui-popup-state/hooks'
import { Transforms } from 'slate'
import PopperDialog from '../PopperDialog'
import isUrl from 'is-url'
import ReactPlayer from 'react-player'
import { Resizable } from 're-resizable'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'
import { Modal } from '../modal/url-check-modal/modal'
import { useModal } from '../modal/url-check-modal/use-modal'

export default props => {
  const editor = useEditor()
  const { element, children, attributes } = props
  const { url } = element
  const isEmpty = !url

  const classes = useStyles({ isEmpty })

  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'demoPopper',
  })

  const [inputVal, setInputVal] = React.useState('')
  const [activeIndex, setActiveIndex] = React.useState(0)
  const [submitLoading, setSubmitLoading] = React.useState(false)
  const { show, toggle } = useModal()
  const fileInputElment = React.createRef()

  const handleVideoUpload = async event => {
    const files = [...event.target.files]
    if (files.length === 0) return
    await setSubmitLoading(true)
    const result = await Promise.all(
      files.map(file => {
        let vUrl = url
        if (window.createObjectURL !== undefined) {
          vUrl = window.createObjectURL(file)
        } else if (window.URL !== undefined) {
          vUrl = window.URL.createObjectURL(file)
        } else if (window.webkitURL !== undefined) {
          vUrl = window.webkitURL.createObjectURL(file)
        }
        return vUrl
      })
    )
    insertVideo(result)
    popupState.setOpen(false)
  }

  const insertVideo = videoUrl => {
    const path = ReactEditor.findPath(editor, element)
    Transforms.setNodes(editor, { url: videoUrl }, { at: path })
  }

  const handleClick = () => {
    if (isUrl(inputVal)) {
      insertVideo(inputVal)
      popupState.setOpen(false)
    } else {
      toggle()
    }
  }

  const onKeyDown = e => {
    if (e.key === 'Enter') {
      if (isUrl(inputVal)) {
        insertVideo(inputVal)
        setInputVal('')
        popupState.setOpen(false)
      } else {
        toggle()
      }
    }
  }

  const renderBottomLine = () => {
    return <div className={classes.loadLine} />
  }

  const VideoContent = () => {
    return (
      <div
        {...attributes}
        contentEditable={false}
        className={classes.insertBlock}
      >
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
    <div className={classes.videoRepo} {...attributes} contentEditable={false}>
      {!url && (
        <div className={classes.videoBlock}>
          <div className={classes.videoContent}>
            <div
              role="button"
              className={classes.videoButton}
              {...bindTrigger(popupState)}
            >
              <MovieFilter className={classes.videoIcon} />
              <span className={classes.videoText}>Embed or Upload a File</span>
            </div>
          </div>
        </div>
      )}
      {url && (
        <Resizable
          defaultSize={{ width: 576 }}
          className={classes.videoInsert}
          enable={{ left: true, right: true }}
          contentEditable={false}
        >
          <VideoContent />
        </Resizable>
      )}
      {children}
      <PopperDialog {...bindPopover(popupState)}>
        <Tabs
          selectedIndex={activeIndex}
          onSelect={tabIndex => setActiveIndex(tabIndex)}
        >
          <div className={classes.videoCard}>
            <div className={classes.wrapper}>
              <div className={classes.menuTabs}>
                <TabList className={classes.tabList}>
                  <Tab style={{ outline: 'none' }}>
                    <div className={classes.tabPosition}>
                      <div className={classes.tabTitle} role="button">
                        Embed link
                      </div>
                      {activeIndex === 0 ? renderBottomLine() : null}
                    </div>
                  </Tab>
                  <Tab style={{ outline: 'none' }}>
                    <div className={classes.tabPosition}>
                      <div className={classes.tabTitle} role="button">
                        Upload
                      </div>
                      {activeIndex === 1 ? renderBottomLine() : null}
                    </div>
                  </Tab>
                </TabList>
              </div>
            </div>
            <div className={classes.cardContent}>
              <TabPanel>
                <div className={classes.inputWrapper}>
                  <div className={classes.inputContent}>
                    <input
                      type="url"
                      onChange={e => setInputVal(e.target.value)}
                      onKeyDown={onKeyDown}
                      value={inputVal}
                      className={classes.inputItem}
                      placeholder="Paste the video link"
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
                    Embed video
                  </div>
                </div>
                <div className={classes.supportTypes}>
                  <div className={classes.typesContent}>
                    Works with YouTube, Vimeo, and more
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className={classes.uploadWrapper}>
                  <input
                    type="file"
                    hidden
                    ref={fileInputElment}
                    accept="video/*"
                    onChange={event => handleVideoUpload(event)}
                  />
                  <div
                    className={classes.uploadButton}
                    role="button"
                    tabIndex="0"
                    onClick={() => {
                      fileInputElment.current.click()
                    }}
                  >
                    Choose a Video
                  </div>
                </div>
              </TabPanel>
            </div>
          </div>
        </Tabs>
      </PopperDialog>
      <Modal show={show} hide={toggle} />
    </div>
  )
}
