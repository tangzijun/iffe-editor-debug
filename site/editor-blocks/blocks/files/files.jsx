import React from 'react'
import { ReactEditor, useEditor, useSelected, useFocused } from 'slate-react'
import {
  usePopupState,
  bindTrigger,
  bindPopover,
} from 'material-ui-popup-state/hooks'
import { Transforms } from 'slate'
import { useStyles } from './styles'
import { AttachFile } from '@material-ui/icons'
import PopperDialog from '../PopperDialog'
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs'

export default props => {
  const editor = useEditor()
  const { element, children, attributes } = props
  const { url } = element
  const isEmpty = !url
  const classes = useStyles({ isEmpty })
  const fileElement = React.createRef()

  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'demoPopper',
  })

  const [inputVal, setInputVal] = React.useState('')
  const [activeIndex, setActiveIndex] = React.useState(0)
  const [submitLoading, setSubmitLoading] = React.useState(false)
  const fileInputElment = React.createRef()

  const handleFileUpload = async event => {
    const files = [...event.target.files]
    if (files.length === 0) return
    await setSubmitLoading(true)
    const result = await Promise.all(
      files.map(file => {
        let fUrl = url
        if (window.createObjectURL !== undefined) {
          fUrl = window.createObjectURL(file)
        } else if (window.URL !== undefined) {
          fUrl = window.URL.createObjectURL(file)
        } else if (window.webkitURL !== undefined) {
          fUrl = window.webkitURL.createObjectURL(file)
        }
        return fUrl
      })
    )

    const xhr = new XMLHttpRequest()
    xhr.open('GET', result)
    xhr.responseType = 'blob'
    xhr.onload = () => {
      console.log(xhr.response)
      insertFile(xhr.responseURL)
      popupState.setOpen(false)
    }
    xhr.send()

    // xhr.onreadystatechange = () => {
    //   if(xhr.readyState === 4 && xhr.status === 200){
    //     const fileBlob = xhr.response
    //     const fileType = fileBlob.type
    //     let fileName = null
    //       /**
    //        * some basic type judgement
    //        */
    //     const formData = new FormData()
    //     formData.append('file', fileBlob, fileName）

    //     /**
    //      * upload blod to server, reponse url to component
    //      */

    //   }
    // }
    // xhr.send()
  }

  const insertFile = fileUrl => {
    const path = ReactEditor.findPath(editor, element)
    Transforms.setNodes(editor, { url: fileUrl }, { at: path })
  }

  const handleClick = () => {
    insertFile(inputVal)
    popupState.setOpen(false)
  }

  const onKeyDown = event => {
    if (event.key === 'Enter') {
      insertFile(inputVal)
      popupState.setOpen(false)
    }
  }

  const renderBottomLine = () => {
    return <div className={classes.loadLine} />
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

  const FileContent = () => {
    return (
      <div
        {...attributes}
        contentEditable={false}
        className={classes.insertBlock}
      >
        <div className={classes.insertContainer}>
          <div className={classes.insertIcon}>
            <AttachFile />
          </div>
          <div className={classes.insertWrapper}>
            <div
              className={classes.insertContent}
              onClick={() => fileElement.current.click()}
            >
              {url ? url : null}
            </div>
          </div>
          <a
            href={url}
            ref={fileElement}
            style={{ display: 'none' }}
            target="__blank"
          />
        </div>
      </div>
    )
  }

  return (
    <div className={classes.fileRepo} {...props} contentEditable={false}>
      {!url && (
        <div className={classes.fileBlock}>
          <div className={classes.fileContent}>
            <div
              role="button"
              className={classes.fileButton}
              {...bindTrigger(popupState)}
            >
              <AttachFile className={classes.fileIcon} />
              <span className={classes.fileText}>Upload or Embed a File</span>
            </div>
          </div>
        </div>
      )}
      {url && <FileContent />}
      {children}
      <PopperDialog {...bindPopover(popupState)}>
        <Tabs
          selectedIndex={activeIndex}
          onSelect={tabIndex => setActiveIndex(tabIndex)}
        >
          <div className={classes.fileCard}>
            <div className={classes.wrapper}>
              <div className={classes.menuTabs}>
                <TabList className={classes.tabList}>
                  <Tab style={{ outline: 'none' }}>
                    <div className={classes.tabPosition}>
                      <div className={classes.tabTitle} role="button">
                        Upload
                      </div>
                      {activeIndex === 0 ? renderBottomLine() : null}
                    </div>
                  </Tab>
                  <Tab style={{ outline: 'none' }}>
                    <div className={classes.tabPosition}>
                      <div className={classes.tabTitle}>Embed link</div>
                      {activeIndex === 1 ? renderBottomLine() : null}
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
                    accept="*"
                    onChange={e => handleFileUpload(e)}
                  />
                  <div
                    className={classes.uploadButton}
                    role="button"
                    tabIndex="0"
                    onClick={() => {
                      fileInputElment.current.click()
                    }}
                  >
                    Choose a File
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
                      placeholder="Paste a file link"
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
                    Works with links of PDFs, Google Drive, Google Maps,
                    CodePen…
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
