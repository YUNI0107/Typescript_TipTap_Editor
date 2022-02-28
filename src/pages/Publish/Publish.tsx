import { Editor, EditorContent } from '@tiptap/react'

function Publish({
  editor,
  handleEditorMode,
}: {
  editor: Editor | null
  handleEditorMode: () => void
}) {
  if (!editor) return null

  return (
    <div className="flex flex-col max-w-[800px] w-full items-end">
      <div className="w-full bg-white min-h-[380px] rounded-[10px] px-5 py-2 my-10">
        <EditorContent editor={editor} readOnly />
      </div>
      <button
        className="bg-main-purple-300 text-white py-2 px-4 rounded-[10px]"
        onClick={handleEditorMode}
      >
        Back To Editor
      </button>
    </div>
  )
}

export default Publish
