import { Transforms, Editor, Path } from 'slate'
import { BlockType } from '../blocks/types'

const CHECK_TYPE = [BlockType.HINT]

const withHint = oldEditor => {
  const editor = oldEditor
  const { onHotkey, callHotKey, deleteBackward } = editor

  editor.onHotkey = event => {
    callHotKey(event, {
      'mod+a': () => {
        const match = n => CHECK_TYPE.includes(n.type)
        const [node] = Editor.nodes(editor, { match })
        if (node) {
          const [, path] = node
          Transforms.select(editor, path)
          event.preventDefault()
        }
      },
      'mod+enter': () => {
        const match = n => CHECK_TYPE.includes(n.type)
        const [node] = Editor.nodes(editor, { match })
        if (node) {
          const [, path] = node
          const block = {
            type: BlockType.PARAGRAPH,
            children: [{ text: '' }],
          }
          const at = Path.next(path)
          Transforms.insertNodes(editor, block, { at })
          Transforms.select(editor, at)
          event.preventDefault()
        }
      },
    })
    onHotkey(event)
  }
}
