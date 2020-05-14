import React from 'react'
import ReactDOM from 'react-dom'
import { useStyles } from './styles'

const Modal = ({ show, hide }) => {
  const classes = useStyles()
  return show
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className={classes.modalOverlay}>
            <div aria-modal aria-hidden tabIndex={-1} role="dialog">
              <div className={classes.modalPosition} />
              <div className={classes.modalContent}>
                <div className={classes.modalText}>
                  Please enter a valid link.
                </div>
                <div className={classes.modalButtonWrapper}>
                  <div
                    className={classes.modalButton}
                    role="button"
                    onClick={hide}
                  >
                    Okay
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null
}
export { Modal }
