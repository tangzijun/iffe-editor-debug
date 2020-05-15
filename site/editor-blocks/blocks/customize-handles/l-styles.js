import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  leftHandle: {
    width: '15px',
    display: 'block',
    height: '100%',
  },
  leftHandleWrapper: {
    position: 'absolute',
    pointerEvents: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    left: 5,
    top: 0,
    zIndex: 1,
    height: '100%',
    width: '15px',
    cursor: 'col-resize',
  },
  leftHandleContent: {
    borderRadius: '20px',
    background: 'rgba(15, 15, 15, 0.6) none repeat scroll 0% 0%',
    border: '1px solid rgba(255, 255, 255, 0.9)',
    width: '4px',
    height: '48px',
    maxHeight: '50%',
    transition: 'opacity 300ms ease-in 0s',
  },
})

export { useStyles }
