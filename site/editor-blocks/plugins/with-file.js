import { Transforms } from 'slate'
import isUrl from 'is-url'

const withFile = editor => {
  const { insertData, isVoid } = editor

  editor.isVoid = element => {
    return element.type === 'file' ? true : isVoid(element)
  }

  editor.insertData = data => {
    const text = data.getData('text/plain')
    const { files } = data

    if (files && files.length > 0) {
      for (const file of files) {
        const reader = new FileReader()
        const [mime] = file.type.split('/')

        if (mime === 'file') {
          reader.addEventListener('load', () => {
            const url = reader.result
            insertFile(editor, url)
          })

          reader.readAsDataURL(file)
        }
      }
    } else if (isUrl(text)) {
      insertFile(editor, text)
    } else {
      insertData(data)
    }
  }

  return editor
}

const insertFile = (editor, url) => {
  const text = { text: '' }
  const file = { type: 'file', url, children: [text] }
  Transforms.insertNodes(editor, file)
}

export { withFile }
