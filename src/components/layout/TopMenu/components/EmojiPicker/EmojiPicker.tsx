import { Editor, Range } from '@tiptap/react'

// components
import EmojiCustomSection from './EmojiCustomSection'

// constants
import { emojiList } from '../../../../../constants/emojiList'

function EmojiPicker({ editor }: { editor: Editor }) {
  // operation
  const insertEmoji = (emoji: string) => {
    const selection = editor.state.selection
    if (selection.empty) {
      editor.chain().focus().insertContentAt(editor.state.selection.anchor, emoji).focus().run()
    } else {
      const range: Range = {
        from: selection.from,
        to: selection.to,
      }
      editor.chain().focus().insertContentAt(range, emoji).focus().run()
    }
  }

  return <EmojiCustomSection list={emojiList} currentValue={'💜'} insertContent={insertEmoji} />
}

export default EmojiPicker
