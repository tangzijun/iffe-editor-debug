import React from 'react'
import ReactDOM from 'react-dom'

const ImgPrevModal = ({ imgShow, hide, IUrl }) => {
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
        <div
          className="modalOverlay"
          style={{
            width: '100vw',
            height: '100vh',
            zIndex: 9999,
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            pointerEvents: 'auto',
            cursor: 'zoom-out',
            transform: 'translateY(0px)',
            boxSizing: 'border-box',
            outline: 0,
          }}
          onClick={hide}
        >
          <div aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div
              className="modalPosition"
              style={{
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                background: 'black none repeat scroll 0% 0%',
                opacity: 0.8,
              }}
            />
            <div
              className="modalContent"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                display: 'flex',
                width: '25%',
                height: '112%',
                transform: 'translateX(548.404px) translateY(32px)',
              }}
            >
              <div
                className="modalImgWrapper"
                style={{
                  margin: '0 auto',
                  alignSelf: 'center',
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                }}
              >
                <img
                  src={IUrl}
                  className="raw-img"
                  style={{
                    display: 'block',
                    objectFit: 'cover',
                    borderRadius: '1px',
                    background: 'white none repeat scroll 0% 0%',
                    width: '100%',
                    maxHeight: '100%',
                    pointerEvents: 'auto',
                  }}
                />
              </div>
            </div>
            <div
              className="modal-close"
              style={{
                position: 'absolute',
                top: '16px',
                right: '18px',
                display: 'block',
                fontWeight: '500',
              }}
            >
              <div
                className="close-button"
                role="button"
                onClick={hide}
                style={{
                  userSelect: 'none',
                  transition: 'background 120ms ease-in 0s',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  flexShrink: 0,
                  whiteSpace: 'nowrap',
                  height: '28px',
                  borderRadius: '3px',
                  fontSize: '14px',
                  lineHeight: '1.2',
                  minWidth: 0,
                  paddingLeft: '8px',
                  paddingRight: '8px',
                  color: '#fff',
                  '&:hover': {
                    background:
                      'rgba(55, 53, 47, 0.08) none repeat scroll 0% 0%',
                  },
                }}
              >
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
