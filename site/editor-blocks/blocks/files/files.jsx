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

  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'demoPopper',
  })

  const [inputVal, setInputVal] = React.useState(url)
  const [activeIndex, setActiveIndex] = React.useState(0)

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
  const fileContent = () => {
    return (
      <div {...attributes}>
        <div contentEditable={false}>
          <embed src={url} type="file" />
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
      {url && <fileContent />}
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
                  <div
                    className={classes.uploadButton}
                    role="button"
                    tabIndex="0"
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
