import { Editor } from '@tiptap/react'

// components
import CommandButton from '../../../../common/CommandButton'

function CommandButtons({ editor }: { editor: Editor }) {
  return (
    <div className="flex">
      <CommandButton
        isActive={editor.isActive({ textAlign: 'left' })}
        handleClick={() => editor.chain().focus().setTextAlign('left').run()}
      >
        <i className="ri-align-left"></i>
      </CommandButton>

      <CommandButton
        isActive={editor.isActive({ textAlign: 'center' })}
        handleClick={() => editor.chain().focus().setTextAlign('center').run()}
      >
        <i className="ri-align-center"></i>
      </CommandButton>

      <CommandButton
        isActive={editor.isActive({ textAlign: 'right' })}
        handleClick={() => editor.chain().focus().setTextAlign('right').run()}
      >
        <i className="ri-align-right"></i>
      </CommandButton>

      <CommandButton
        isActive={editor.isActive('bold')}
        handleClick={() => editor.chain().focus().toggleBold().run()}
      >
        <i className="ri-bold"></i>
      </CommandButton>

      <CommandButton
        isActive={editor.isActive('italic')}
        handleClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <i className="ri-italic"></i>
      </CommandButton>

      <CommandButton
        isActive={editor.isActive('underline')}
        handleClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        <i className="ri-underline"></i>
      </CommandButton>

      <CommandButton
        isActive={editor.isActive('bulletList')}
        handleClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        <i className="ri-list-unordered"></i>
      </CommandButton>

      <CommandButton
        isActive={editor.isActive('orderedList')}
        handleClick={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <i className="ri-list-ordered"></i>
      </CommandButton>

      <CommandButton isActive={editor.isActive('link')} handleClick={() => console.log('link')}>
        <i className="ri-link-m"></i>
      </CommandButton>
    </div>
  )
}

export default CommandButtons
