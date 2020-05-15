import React from 'react'
import ReactDOM from 'react-dom'
import { useStyles } from './styles'

const ImgPrevModal = ({ imgShow, hide, IUrl }) => {
  const classes = useStyles()

  const bodyEl = document.body

  const stopBodyScroll = () => {
    if (imgShow) {
      bodyEl.style.overflow = 'hidden'
      bodyEl.style.height = '100%'
    } else {
      bodyEl.style.height = ''
      bodyEl.style.overflow = ''
    }
  }

  if (imgShow) {
    stopBodyScroll()
    return ReactDOM.createPortal(
      <React.Fragment>
        <div className={classes.modalOverlay} onClick={hide}>
          <div aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className={classes.modalPosition} />
            <div className={classes.modalContent}>
              <div className={classes.modalImgWrapper}>
                <div style={{ width: '100%', height: '100%' }}>
                  <img src={IUrl} className={classes.rawImg} />
                </div>
              </div>
            </div>
            <div className={classes.modalClose}>
              <div className={classes.closeButton} role="button" onClick={hide}>
                Close
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>,
      document.body
    )
  } else {
    stopBodyScroll()
    return null
  }
}

export { ImgPrevModal }
