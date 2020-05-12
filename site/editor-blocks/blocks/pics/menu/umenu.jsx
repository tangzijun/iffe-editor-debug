import React from 'react'
import { useStyles } from './styles/umenu'
import Econtent from './ucontent/econtent'
// import Ucontent from './ucontent/ucontent'

const Umenu = () => {
  const classes = useStyles()

  return (
    <div className={classes.mediaMenu}>
      <div className={classes.wrapper}>
        <div className={classes.menuTabs}>
          <div className={classes.tabPosition}>
            <div className={classes.tabTitle} role="button">
              Upload
            </div>
          </div>
          <div className={classes.tabPosition}>
            <div className={classes.tabTitle}>Embed link</div>
            <div className={classes.loadLine} />
          </div>
        </div>
      </div>
      <div className={classes.menuContent}>
        <Econtent />
      </div>
    </div>
  )
}

export default Umenu
