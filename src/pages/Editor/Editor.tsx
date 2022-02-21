import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TextStyle from '@tiptap/extension-text-style'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import Color from '@tiptap/extension-color'
import Link from '@tiptap/extension-link'
import './style.scss'

// customExtension
import FontSize from '../../extension/FontSize'

// components
import TopMenu from '../../components/layout/TopMenu'

function Editor() {
  // editor
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      FontSize,
      Underline,
      Color,
      TextStyle,
      Link.configure({
        autolink: false,
        openOnClick: false,
      }),
    ],
  })

  return (
    <div className="relative flex-1 max-w-[800px] w-full drop-shadow-md ring-main-purple-300 ring-5 rounded-[10px] overflow-hidden">
      <TopMenu editor={editor} />
      <EditorContent editor={editor} className="min-h-[380px] px-5 py-2 bg-white" />
    </div>
  )
}

export default Editor