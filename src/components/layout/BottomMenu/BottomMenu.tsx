import { ChangeEvent, useContext, useRef } from 'react'
import { Editor } from '@tiptap/react'

// context
import { DialogContext } from '../../../App'

function BottomMenu({ editor }: { editor: Editor | null }) {
  if (!editor) return null
  const { handleShow } = useContext(DialogContext)

  const fileInput = useRef<HTMLInputElement>(null)
  const imageInput = useRef<HTMLInputElement>(null)

  // operation
  const uploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && fileInput.current) {
      const availableType = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf']
      const fileType = availableType.find((type: string) => type === e.target.files?.[0].type)

      if (fileType) {
        console.log(
          '%cCall Api Upload',
          'background: #8e44ad; color: #fff; border-radius: 5px; padding: 5px;'
        )
        editor.chain().focus().addFileBlock(e.target.files[0], fileType).blur().run()
      } else {
        handleShow(true, '上傳檔案格式不符', '請確認您上傳的檔案是否為JPEG、PNG或PDF。')
      }

      fileInput.current.value = ''
    }
  }

  const addImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const url = window.URL.createObjectURL(e.target.files[0])
      editor.chain().focus().setImage({ src: url }).run()
    }
  }

  return (
    <>
      <div
        className="px-6 py-5 w-full h-20 bg-main-purple-300 text-white
          flex justify-between items-center"
      >
        {/* left */}
        <div className="flex text-[40px]">
          <button className="relative w-[40px] h-[40px] mr-3 flex items-center">
            <i className="ri-image-fill"></i>
            <input
              type="file"
              className="absolute w-full h-full top-0 left-0 opacity-0 cursor-pointer text-[0px]"
              onChange={addImage}
              ref={imageInput}
            />
          </button>

          <button className="relative w-[40px] h-[40px] flex items-center">
            <i className="ri-chat-upload-fill"></i>
            <input
              type="file"
              className="absolute w-full h-full top-0 left-0 opacity-0 cursor-pointer text-[0px]"
              onChange={uploadFile}
              ref={fileInput}
            />
          </button>
        </div>

        {/* right */}
        <div className="flex items-baseline">
          <p className="mr-3">Go To Publish Article</p>
          <h2 className="text-2xl font-semibold underline cursor-pointer">Publish</h2>
        </div>
      </div>
    </>
  )
}

export default BottomMenu
