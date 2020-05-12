import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  fileRepo: {
    width: '100%',
    maxWidth: 'calc((100vw - 0px) - 240px)',
    boxSizing: 'border-box',
    outline: 0,
    marginTop: '4px',
    marginBottom: '4px',
    fontSize: '16px',
    color: 'rgb(55, 53, 47)',
    padding: '0px 96px',
  },
  fileBlock: {
    width: '100%',
    margin: '0 auto',
    position: 'relative',
  },
  fileContent: {
    display: 'flex',
    backgroundColor: 'rgb(242, 241, 238)',
    width: '100%',
    borderRadius: '3px',
    alignItems: 'center',
    fontSize: '14px',
    userSelect: 'none',
    cursor: 'pointer',
    fontFamily: '-apple-system',
    color: 'rgba(55, 53, 47, 0.6)',
    position: 'relative',
  },
  fileButton: {
    padding: '12px 36px 12px 12px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    textAlign: 'left',
    width: '100%',
    overflow: 'hidden',
    '&:hover': {
      background: 'rgba(55, 53, 47, 0.08)',
      transition: 'background 120ms ease-in 0s',
    },
  },
  fileIcon: {
    width: '25px',
    height: '25px',
    display: 'block',
    fill: 'rgba(55, 53, 47, 0.4)',
    flexShrink: 0,
    backfaceVisibility: 'hidden',
    marginRight: '12px',
  },
  fileText: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  fileCard: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    minWidth: '180px',
    maxWidth: 'calc(100vw -24px)',
    height: '100%',
    maxHeight: '70vh',
    boxSizing: 'border-box',
    position: 'relative',
    borderRadius: '3px',
    boxShadow:
      'rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px',
    transformOrigin: '50% bottom',
    fontFamily: 'Arial',
    '&::placeholder': {
      color: 'inherit',
      opacity: 0.375,
    },
    '&::selection': {
      background: 'rgba(45, 170, 219, 0.3)',
    },
  },
  wrapper: {
    flexShrink: 0,
  },
  menuTabs: {
    display: 'flex',
    fontSize: '14px',
    boxSizing: 'border-box',
    width: '100%',
    paddingLeft: '14px',
    boxShadow: 'rgba(55, 53, 47, 0.09) 0px 1px 0px',
    position: 'relative',
    zIndex: 1,
  },
  tabPosition: {
    paddingTop: '6px',
    paddingBottom: '6px',
    whiteSpace: 'nowrap',
    minWidth: 0,
    flexShrink: 0,
    color: 'rgba(55, 53, 47, 0.6)',
    position: 'relative',
  },
  active: {
    borderBottom: '3px solid black',
  },
  tabTitle: {
    userSelect: 'none',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    flexShrink: 0,
    whiteSpace: 'nowrap',
    height: '32px',
    borderRadius: '3px',
    fontSize: '14px',
    lineHeight: 1.2,
    minWidth: 0,
    paddingLeft: '8px',
    paddingRight: '8px',
    color: 'rgb(55, 53, 47)',
    transition: 'background, 120ms ease-in 0s',
    '&:hover': {
      background: 'rgba(55, 53, 47, 0.08)',
    },
    '&:active': {
      background: 'rgba(55, 53, 47, 0.16)',
    },
  },
  loadLine: {
    borderBottom: '3px solid rgb(55, 53, 47)',
    position: 'absolute',
    bottom: '-1px',
    left: 0,
    right: 0,
  },
  cardContent: {
    flexGrow: 1,
    minHeight: 0,
    transform: 'translateZ(0px)',
    marginRight: 0,
    marginBottom: 0,
    overflow: 'hidden auto',
    boxSizing: 'border-box',
  },
})

export { useStyles }
