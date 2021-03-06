import { useState } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TextStyle from '@tiptap/extension-text-style'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import Color from '@tiptap/extension-color'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import './style.scss'

// customExtension
import FontSize from '../../extension/FontSize'
import MenuStateProvider from '../../components/layout/MenuProvider/MenuStateProvider'
import FileBlockExtension from '../../components/common/FileBlock/FileBlockExtension'

// components
import TopMenu from '../../components/layout/TopMenu'
import BubbleLinkMenu from '../../components/layout/BubbleLinkMenu'
import BottomMenu from '../../components/layout/BottomMenu'
import Publish from '../Publish'

function Editor() {
  const [isEditorMode, setIsEditorMode] = useState(true)

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
      FileBlockExtension,
      Image,
    ],
  })

  return (
    <>
      {isEditorMode ? (
        <MenuStateProvider>
          <div className="relative flex-1 max-w-[800px] w-full drop-shadow-md ring-main-purple-300 ring-5 rounded-[10px] ">
            <TopMenu editor={editor} />

            {/* main editor */}
            <div className="relative">
              <BubbleLinkMenu editor={editor} />
              <EditorContent editor={editor} className="min-h-[380px] px-5 py-2 bg-white" />
            </div>

            <BottomMenu editor={editor} handleEditorMode={() => setIsEditorMode(false)} />
          </div>
        </MenuStateProvider>
      ) : (
        <Publish editor={editor} handleEditorMode={() => setIsEditorMode(true)} />
      )}
    </>
  )
}

export default Editor
