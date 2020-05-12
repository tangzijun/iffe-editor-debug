import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  hintRoot: {
    margin: '0px',
    display: 'block',
    padding: '0px',
    position: 'relative',
    fontFamily: 'Content-font, Roboto, sans-serif',
    color: 'rgb(59, 69, 78)',
    fontSize: '16px',
    fontWeight: '400',
    transform: 'translate(0px)',
    whiteSpace: 'pre-wrap',
    overflowWrap: 'break-word',
  },
  hintWrapper: {
    width: '100%',
    boxSizing: 'border-box',
    margin: '32px 0',
    display: 'block',
    padding: '25px 24px calc(0.1px) 50px',
    position: 'relative',
    borderLeft: '4px solid',
    borderLeftColor: 'currentcolor',
    borderRadius: '3px',
    backgroundColor: 'rgb(245, 247, 249)',
  },
  hintIcons: {
    top: '24px',
    left: '16px',
    cursor: 'pointer',
    margin: '0px',
    padding: '0px',
    display: 'block',
    position: 'absolute',
    zIndex: '12',
    fontSize: '24px',
  },
  hintContent: {
    margin: '0px',
    padding: '0px',
    lineHeight: '1.5',
    display: 'block',
    position: 'relative',
  },
  hintTxtz: {
    margin: '0px',
    padding: '0px',
    display: 'block',
    position: 'relative',
    transform: 'translate(0px)',
  },
  hintDefault: {
    color: 'inherit',
    margin: '0 0 25px',
    position: 'relative',
    '&:focus': {
      outline: 'none',
    },
  },
})

export { useStyles }
