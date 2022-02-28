import { createContext, ReactNode, useState, useMemo } from 'react'

// types
type IDialog = {
  isShow: boolean
  title: string
  info: string
  handleShow: (isShow: boolean, title?: string, info?: string) => void
}

export const DialogStateContext = createContext<IDialog | null>(null)

function DialogProvider({ children }: { children: ReactNode }) {
  const [isDialogShow, setIsDialogShow] = useState(false)
  const [title, setTitle] = useState('')
  const [info, setInfo] = useState('')

  // operation
  const handleShow = (isShow: boolean, title?: string, info?: string) => {
    setIsDialogShow(isShow)
    if (title && info) {
      setTitle(title)
      setInfo(info)
    }
  }

  const dialogInfo = useMemo(
    () => ({
      isShow: isDialogShow,
      title,
      info,
      handleShow,
    }),
    [isDialogShow, title, info]
  )

  return <DialogStateContext.Provider value={dialogInfo}>{children}</DialogStateContext.Provider>
}

export default DialogProvider
