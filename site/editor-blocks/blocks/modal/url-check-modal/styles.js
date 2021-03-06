import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  modalOverlay: {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    zIndex: 9999,
    top: '0px',
    left: '0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'auto',
    opacity: 1,
    transform: 'translateZ(0px)',
    boxSizing: 'border-box',
    outline: 0,
  },
  modalPosition: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: 'rgba(15, 15, 15, 0.6) none repeat scroll 0% 0%',
  },
  modalContent: {
    position: 'relative',
    zIndex: 1,
    boxShadow:
      'rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 5px 10px, rgba(15, 15, 15, 0.2) 0px 15px 40px',
    borderRadius: '3px',
    background: 'white none repeat scroll 0% 0%',
    overflow: 'hidden',
    padding: '24px 32px',
    width: '272px',
    fontSize: '16px',
    marginLeft: '24px',
    marginRight: '24px',
  },
  modalText: {
    minHeight: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalButtonWrapper: {
    paddingTop: '6px',
    paddingBottom: '6px',
  },
  modalButton: {
    userSelect: 'none',
    transition: 'background 120ms ease-in 0s',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    borderRadius: '3px',
    height: '32px',
    fontSize: '14px',
    lineHeight: 1.2,
    border: '1px solid rgba(55, 53, 47, 0.16)',
    width: '100%',
    marginTop: '8px',
    '&:hover': {
      background: 'rgba(55, 53, 47, 0.08)',
    },
  },
})

export { useStyles }
