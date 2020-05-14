import React from 'react'

const useImgModal = () => {
  const [imgShow, setImgShow] = React.useState(false)
  const trigger = () => {
    setImgShow(!imgShow)
  }
  return { imgShow, trigger }
}

export { useImgModal }
