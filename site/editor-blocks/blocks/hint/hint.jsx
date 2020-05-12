import React from 'react'
import { useStyles } from './styles'
import Icon from '@material-ui/core/Icon'
import changeHintStatus from '../../processor/HintProcessor'

const IconTypes = [
  'info_outline',
  'error_outline',
  'help_outline',
  'check_circle_outline',
]

// const IconTypes = [
//   { info: 'info_outline' },
//   { error: 'error_outline' },
//   { help: 'help_outline' },
//   { check: 'check_circle_outline' },
// ]

const ColorList = ['#3884ff', '#f77d05', '#ff4642', '#26cb7c']

const Hint = props => {
  const { children, element, attributes } = props

  const SavedValue = element.status

  const classes = useStyles()
  const [status, setStatus] = React.useState(SavedValue)

  let i = status

  const handleClick = () => {
    i >= 3 ? setStatus(0) : setStatus(++i)
  }

  return (
    <div className={classes.hintRoot} {...attributes}>
      <div
        className={classes.hintWrapper}
        style={{ borderLeftColor: `${ColorList[i]}` }}
      >
        <div
          className={classes.hintIcons}
          onClick={handleClick}
          contentEditable="false"
          suppressContentEditableWarning
        >
          <Icon style={{ color: `${ColorList[i]}` }}>{IconTypes[i]}</Icon>
        </div>
        <div className={classes.hintContent}>
          <div className={classes.hintTxtz}>
            <p className={classes.hintDefault}>{children}</p>
          </div>
        </div>
        <div className="hint-position" />
      </div>
    </div>
  )
}

export { Hint }
