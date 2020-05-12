import { Transforms } from 'slate'

export default {
  create(editor) {
    Transforms.setNodes(editor, { type: 'hint', status: 0 })
  },
  AddSpecificHintType(editor, newStatus) {
    Transforms.setNodes(editor, { type: 'hint', status: newStatus })
  },
}
