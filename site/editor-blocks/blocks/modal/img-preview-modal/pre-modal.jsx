import React from 'react'
import ReactDOM from 'react-dom'
import { useStyles } from './styles'

const ImgPrevModal = ({ imgShow, hide, IUrl }) => {
  const classes = useStyles()

  const bodyEl = document.body

  const stopBodyScroll = () => {
    let top = 0
    top = window.scrollY

    bodyEl.style.position = 'fixed'
    bodyEl.style.width = '100%'
    bodyEl.style.overflow = 'hidden'
    bodyEl.style.top = `${-top}px`
  }
  const backNormal = () => {
    const top = window.scrollY
    bodyEl.style.position = ''
    bodyEl.style.top = ''
    bodyEl.style.width = ''
    bodyEl.style.overflow = ''

    window.scrollTo(0, top)
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
                <img src={IUrl} className={classes.rawImg} />
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
    backNormal()
    return null
  }
}

export { ImgPrevModal }
