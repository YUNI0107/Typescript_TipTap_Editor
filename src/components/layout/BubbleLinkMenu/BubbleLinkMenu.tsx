import { useContext, useState, useMemo, useRef, useEffect } from 'react'
import { Editor } from '@tiptap/react'
import classNames from 'classnames'

// context
import { MenuStateContext } from '../MenuProvider/MenuStateProvider'

// constants
import convertColorToCode from '../../../utils/convertColorToCode'

function BubbleLinkMenu({ editor }: { editor: Editor | null }) {
  if (!editor) return null

  // states
  const [isTyping, setIsTyping] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const { isFirstLinkShow, toggleFirstLinkShow } = useContext(MenuStateContext) || {}
  const linkToolBar = useRef<HTMLDivElement | null>(null)

  // computed
  const isLinkMenuShow = useMemo(() => {
    return isFirstLinkShow || editor.isActive('link')
  }, [editor.isActive('link'), isFirstLinkShow])

  const position = useMemo(() => {
    const selectionRange = document.getSelection()
    const selectionCount = selectionRange?.rangeCount
    const selectionDom = selectionCount && selectionRange.getRangeAt(0)

    if (!selectionDom || !linkToolBar.current) return
    const selectionBoundingRect = selectionDom.getBoundingClientRect()
    const selectionTop = selectionBoundingRect.top
    const selectionLeft = selectionBoundingRect.left
    const selectionHeight = selectionBoundingRect.height
    const toolbarWidth = linkToolBar.current.offsetWidth
    const editorLeft = editor.view.dom.getBoundingClientRect().left
    const editorTop = editor.view.dom.getBoundingClientRect().top
    const editorWidth = editor.view.dom.getBoundingClientRect().width

    console.log(editorLeft)

    return {
      // editor padding is 20px, what more space so I use 25px be space
      x:
        selectionLeft + toolbarWidth < editorLeft + editorWidth
          ? selectionLeft - editorLeft + 25
          : editorWidth - toolbarWidth + 20,
      y: selectionTop - editorTop + selectionHeight + 10,
    }
  }, [editor.state.selection])

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
      .setColor(convertColorToCode('main-blue-100') as string)
      .run()
  }

  const resetMenu = () => {
    toggleFirstLinkShow?.(false)
    setIsTyping(false)
  }

  // effect
  useEffect(() => {
    resetMenu()
    setInputValue(editor.isActive('link') ? editor.getAttributes('link').href : '')
  }, [editor.state.selection])

  return (
    <div
      className={classNames(
        'absolute bg-main-blue-300 rounded-[10px] min-w-[320px] p-[10px] z-20',
        isLinkMenuShow ? 'flex' : 'hidden'
      )}
      ref={linkToolBar}
      style={{ top: `${position ? position.y : 0}px`, left: `${position ? position.x : 0}px` }}
    >
      <div className="text-white text-2xl cursor-pointer" onClick={checkLinkInput}>
        {isTyping ? <i className="ri-link-unlink"></i> : <i className="ri-link"></i>}
      </div>

      <div className="bg-white w-[1px] h-[full] min-h-full mx-3 self-stretch"></div>

      {isTyping || isFirstLinkShow ? (
        <input
          className="w-full rounded-[5px] outline-none py-1 px-2"
          type="text"
          // ref={input}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && checkLinkInput()}
        />
      ) : (
        <p className="text-white py-1 px-2 w-full" onClick={() => setIsTyping(true)}>
          {inputValue}
        </p>
      )}
    </div>
  )
}

export default BubbleLinkMenu
