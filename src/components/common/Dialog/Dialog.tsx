import { useContext, useState, useEffect, useRef } from 'react'
import classNames from 'classnames'

// context
import { DialogStateContext } from '../../layout/DialogProvider'

function Dialog() {
  const [isShow, setIsShow] = useState(false)
  const timer = useRef<number | null>(null)
  const DialogContext = useContext(DialogStateContext)

  if (!DialogContext) return null
  const { isShow: isComponentShow, title, info, handleShow } = DialogContext

  // operation
  const closeDialog = () => {
    setIsShow(false)
  }

  const transitionEnd = () => {
    if (!isShow) handleShow(false)
  }

  useEffect(() => {
    if (isComponentShow) {
      timer.current = window.setTimeout(() => {
        setIsShow(true)
      }, 7)
    }

    return () => {
      if (timer.current) window.clearTimeout(timer.current)
    }
  }, [isComponentShow])

  return (
    <>
      {isComponentShow && (
        <div
          className={classNames(
            'fixed w-screen h-screen min-w-[1240px] flex justify-center items-center top-0 left-0 z-50 transition duration-700',
            { 'opacity-0': !isShow }
          )}
          onTransitionEnd={transitionEnd}
        >
          {/* back */}
          <div className="absolute w-full h-full opacity-50 backdrop-blur-sm bg-main-blue-300/50"></div>
          {/* dialog */}
          <div
            className="relative w-[500px] h-auto min-h-[200px] bg-white 
            flex flex-col rounded-[10px] drop-shadow-lg px-10 py-6"
          >
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-main-purple-300">{title}</h1>
              <p className="py-4">{info}</p>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-main-purple-300 text-white py-2 px-4 rounded-[10px]"
                onClick={closeDialog}
              >
                確認
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Dialog
