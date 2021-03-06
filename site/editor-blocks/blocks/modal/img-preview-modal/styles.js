import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  modalOverlay: {
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
  },
  modalPosition: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: 'black none repeat scroll 0% 0%',
    opacity: 0.8,
  },
  modalContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    width: '50%',
    height: '90%',
    transform: 'translateX(50%) translateY(32px)',
  },
  modalImgWrapper: {
    margin: '0 auto',
    alignSelf: 'center',
    position: 'relative',
  },
  rawImg: {
    display: 'block',
    objectFit: 'cover',
    borderRadius: '1px',
    background: 'white none repeat scroll 0% 0%',
    width: '100%',
    height: '100%',
    maxHeight: '30em',
    pointerEvents: 'auto',
  },
  modalClose: {
    position: 'absolute',
    top: '16px',
    right: '18px',
    display: 'block',
    fontWeight: '500',
  },
  closeButton: {
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
      background: 'rgba(55, 53, 47, 0.08) none repeat scroll 0% 0%',
    },
  },
})

export { useStyles }
