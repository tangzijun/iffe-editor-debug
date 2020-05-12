import isHotkey from 'is-hotkey'

const withExtendHotkey = oldEditor => {
  const editor = oldEditor
  editor.onHotkey = () => {}
  editor.callHotkey = (event, HOTKEYS) => {
    const keys = Object.keys(HOTKEYS)
    for (let i = 0; i < keys.length; i++) {
      const hotkey = keys[i]
      if (isHotkey(hotkey, event)) {
        HOTKEYS[hotkey](editor)
        return true
      }
    }
  }
  return editor
}

export default withExtendHotkey
