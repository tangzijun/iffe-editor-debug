import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  uploadWrapper: {
    paddingTop: '6px',
    paddingBottom: '6px',
    marginTop: '8px',
    display: 'flex',
    alignItems: 'center',
    lineHeight: '120%',
    userSelect: 'none',
    minHeight: '28px',
    fontSize: '14px',
    marginLeft: '14px',
    marginRight: '14px',
    minWidth: 0,
    flex: '1 1 auto',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginBottom: '12px',
  },
  uploadButton: {
    userSelect: 'none',
    transition: 'background 120ms ease-in 0s',
    cursor: 'pointer',
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '28px',
    borderRadius: '3px',
    boxShadow:
      'rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset, rgba(15, 15, 15, 0.1) 0px 1px 2px',
    background: 'rgb(46, 170, 220) none repeat scroll 0% 0%',
    color: 'white',
    fill: 'white',
    lineHeight: 1.2,
    paddingLeft: '12px',
    paddingRight: '12px',
    fontWeight: 500,
    width: '100%',
    maxWidth: '300px',
    margin: 'auto',
    '&:hover': {
      background: 'rgb(6, 156, 205) none repeat scroll 0% 0%',
    },
    '&:active': {
      background: 'rgb(0, 141, 190) none repeat scroll 0% 0%',
    },
  },
})

export { useStyles }
