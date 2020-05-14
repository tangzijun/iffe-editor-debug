import React from 'react'

const useModal = () => {
  const [show, setShow] = React.useState(false)
  const toggle = () => {
    setShow(!show)
  }
  return { show, toggle }
}

export { useModal }
