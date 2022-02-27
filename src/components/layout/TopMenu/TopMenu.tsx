import { Editor } from '@tiptap/react'

// components
import HeadingSelect from './components/HeadingSelect'
import CommandButtons from './components/CommandButtons'
import ColorPicker from './components/ColorPicker'
import EmojiPicker from './components/EmojiPicker'

function TopMenu({ editor }: { editor: Editor | null }) {
  if (!editor) return null

  return (
    <div className="px-6 py-5 w-full h-20 bg-white text-main-gray-200 flex justify-between border-b-[5px] rounded-t-[10px] border-main-purple-300">
      <HeadingSelect editor={editor} />

      <div className="flex">
        <CommandButtons editor={editor} />
        <ColorPicker editor={editor} />
        <EmojiPicker editor={editor} />
      </div>
    </div>
  )
}

export default TopMenu
