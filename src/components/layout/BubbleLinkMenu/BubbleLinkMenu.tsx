import { useContext, useState, useMemo } from 'react'
import classNames from 'classnames'

// context
import { MenuStateContext } from '../MenuProvider/MenuStateProvider'
import { Editor } from '@tiptap/react'

function BubbleLinkMenu({ editor }: { editor: Editor | null }) {
  if (!editor) return null

  // states
  const [isTyping, setIsTyping] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const { isFirstLinkShow, toggleFirstLinkShow } = useContext(MenuStateContext) || {}

  // computed
  const isLinkMenuShow = useMemo(() => {
    return isFirstLinkShow || editor.isActive('link')
  }, [editor.isActive('link'), isFirstLinkShow])

  const position = useMemo(() => {
    return {
      x: 0,
      y: 0,
    }
  }, [])

  // operation
  const checkLinkInput = () => {
    if (editor.getAttributes('link').href !== inputValue) {
      setNewLink()
    }
    resetMenu()
  }

  const setNewLink = () => {
    // empty
    if (inputValue === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run()
      return
    }

    // update link
    editor
      .chain()
      .focus()
      .extendMarkRange('link')
      .setLink({ href: inputValue })
      .setColor(convertColorToCode('main-blue-100'))
      .run()
  }

  const resetMenu = () => {
    toggleFirstLinkShow?.(false)
    setIsTyping(false)
  }

  return (
    <div
      className={classNames(
        'absolute bg-main-blue-300 rounded-[10px] min-w-[320px] p-[10px] z-20',
        isLinkMenuShow ? 'flex' : 'hidden'
      )}
      // ref={linkToolBar}
      style={{ top: `${position ? position.y : 0}px`, left: `${position ? position.x : 0}px` }}
    >
      <div className="text-white text-2xl cursor-pointer" onClick={checkLinkInput}>
        {isTyping ? <i className="ri-link-unlink"></i> : <i className="ri-link"></i>}
      </div>

      <div className="bg-white w-[1px] h-[full] min-h-full mx-3 self-stretch"></div>

      {isTyping ? (
        <input
          className="w-full rounded-[5px] outline-none py-1 px-2"
          type="text"
          // ref={input}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && checkLinkInput()}
        />
      ) : (
        <p className="text-white py-1 px-2" onClick={() => setIsTyping(true)}>
          {inputValue}
        </p>
      )}
    </div>
  )
}

export default BubbleLinkMenu
