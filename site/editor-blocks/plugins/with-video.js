import { Transforms } from 'slate'
import isUrl from 'is-url'

const withVideo = editor => {
  const { insertData, isVoid } = editor

  editor.isVoid = element => {
    return element.type === 'video' ? true : isVoid(element)
  }

  editor.insertData = data => {
    const text = data.getData('text/plain')
    const { files } = data

    if (files && files.length > 0) {
      for (const file of files) {
        const reader = new FileReader()
        const [mime] = file.type.split('/')

        if (mime === 'video') {
          reader.addEventListener('load', () => {
            const url = reader.result
            insertVideo(editor, url)
          })

          reader.readAsDataURL(file)
        }
      }
    } else if (isUrl(text)) {
      insertVideo(editor, text)
    } else {
      insertData(data)
    }
  }

  return editor
}

const insertVideo = (editor, url) => {
  const text = { text: '' }
  const video = { type: 'video', url, children: [text] }
  Transforms.insertNodes(editor, video)
}

export { withVideo }
