import { createContext, useState, useMemo } from 'react'

// components
import Editor from './pages/Editor'
import FooterSection from './components/layout/FooterSection'
import Dialog from './components/common/Dialog'

// types
type IDialog = {
  isShow: boolean
  title: string
  info: string
  handleShow: (isShow: boolean, title?: string, info?: string) => void
}

const dialogDefaultInfo = {
  isShow: false,
  title: '',
  info: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleShow: () => {},
}

export const DialogContext = createContext<IDialog>(dialogDefaultInfo)

function App() {
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

  return (
    <div className="flex flex-col bg-main-gray-100 w-screen min-w-[1240px] min-h-screen">
      <DialogContext.Provider value={dialogInfo}>
        <Dialog />
        <div className="flex-[11] flex justify-center items-center px-10 py-5">
          <Editor />
        </div>
      </DialogContext.Provider>

      <FooterSection />
    </div>
  )
}

export default App
