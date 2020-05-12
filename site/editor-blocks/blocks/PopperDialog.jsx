import React from 'react'
import { Popover } from '@material-ui/core'

export default props => {
  const { children, ...arg } = props
  return (
    <Popover
      {...arg}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      {children}
    </Popover>
  )
}
