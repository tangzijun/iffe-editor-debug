import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  videoRepo: {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    outline: 0,
    fontSize: '16px',
    lineHeight: 1.5,
    color: 'rgb(55, 53, 47)',
    maxWidth: '100%',
  },
  videoBlock: {
    display: 'flex',
    width: '100%',
    background: 'rgb(242, 241, 238) none repeat scroll 0% 0%',
    borderRadius: '3px',
    userSelect: 'none',
    cursor: 'pointer',
    maxWidth: '734px',
    alignSelf: 'center',
    marginTop: '4px',
    marginBottom: '4px',
  },
  videoContent: {
    width: '100%',
    borderRadius: '3px',
    fontSize: '14px',
    fontFamily: '-apple-system',
    color: 'rgba(55, 53, 47, 0.6)',
    position: 'relative',
  },
  videoButton: {
    width: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    padding: '12px 36px 12px 12px',
    alignItems: 'center',
    textAlign: 'left',
    overflow: 'hidden',
    '&:hover': {
      background: 'rgba(55, 53, 47, 0.08)',
      transition: 'background 120ms ease-in 0s',
    },
  },
  videoIcon: {
    width: '25px',
    height: '25px',
    display: 'block',
    fill: 'rgba(55, 53, 47, 0.4)',
    flexShrink: 0,
    backfaceVisibility: 'hidden',
    marginRight: '12px',
  },
  videoText: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  videoInsert: {
    width: '100%',
    maxWidth: '100%',
    minWidth: '36px',
    alignSelf: 'center',
    marginTop: '4px',
    marginBottom: '0px',
    position: 'relative',
    '& span': {
      opacity: 0,
    },
    '&:hover': {
      '& span': {
        opacity: 1,
      },
    },
    '&:active': {
      '& span': {
        opacity: 1,
      },
    },
  },
  insertBlock: {
    display: 'flex',
    position: 'relative',
    overflow: 'hidden',
    flexGrow: 1,
    cursor: 'pointer',
  },
  insertWrapper: {
    display: 'block',
    width: '100%',
    pointerEvents: 'auto',
    backgroundColor: 'rgb(242, 241, 238)',
  },
  insertContent: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    minHeight: '100px',
    height: 0,
    paddingTop: '40.2%',
  },
  reactPlayer: {
    position: 'absolute',
    top: '0',
    left: '0',
    borderRadius: '1px',
    '& video': {
      objectFit: 'cover',
    },
  },
  videoCard: {
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
  tabList: {
    display: 'flex',
    listStyle: 'none',
    margin: '1px -41px',
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
  inputWrapper: {
    paddingTop: '6px',
    paddingBottom: '6px',
    marginTop: '8px',
    marginBottom: '6px',
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
  },
  inputContent: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    fontSize: '14px',
    lineHeight: '20px',
    padding: '3px 6px',
    position: 'relative',
    borderRadius: '3px',
    boxShadow:
      'rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset, rgba(15, 15, 15, 0.1) 0px 1px 1px inset',
    background: 'rgba(242, 241, 238, 0.6) none repeat scroll 0% 0%',
    cursor: 'text',
    height: '22px',
  },
  inputItem: {
    outline: 'none',
    fontSize: 'inherit',
    border: 'medium none',
    background: 'rgba(0, 0, 0, 0) none repeat scroll 0% 0%',
    display: 'block',
    resize: 'none',
    padding: 0,
    width: '100%',
  },
  embedWrapper: {
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
  },
  embedButton: {
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
  supportTypes: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: '120%',
    userSelect: 'none',
    fontSize: '14px',
    paddingTop: '4px',
    paddingBottom: '4px',
    background: 'rgba(0, 0, 0, 0) none repeat scroll 0% 0%',
    borderBottom: 'medium none',
    marginTop: '2px',
    marginBottom: '6px',
    marginLeft: '14px',
    marginRight: '14px',
    textAlign: 'center',
    minWidth: 0,
    flex: '1 1 auto',
  },
  typesContent: {
    whiteSpace: 'normal',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: 'rgba(55, 53, 47, 0.6)',
    marginTop: '2px',
    fontSize: '12px',
  },
})

export { useStyles }
