import { useMemo } from 'react'
import { NodeViewProps, NodeViewWrapper } from '@tiptap/react'

function FileBlock({ node, deleteNode }: NodeViewProps) {
  const imgType = new Set(['image/jpeg', 'image/jpg', 'image/png'])
  // operation
  const deleteBlock = () => {
    deleteNode()
  }

  const url = useMemo(() => window.URL.createObjectURL(node.attrs.blob), [node.attrs.blob])
  const fileType = useMemo(() => node.attrs.fileType, [node.attrs.fileType])

  return (
    <NodeViewWrapper className="file-block">
      <div
        className="w-full bg-little-blue px-2 py-3 rounded-[10px] my-3 flex justify-between items-center"
        data-drag-handle
      >
        <div className="flex items-center">
          {imgType.has(fileType) && (
            <div className="w-8 h-8">
              <img className="w-full !h-full object-cover" src={url} alt="縮圖" />
            </div>
          )}
          {fileType === 'application/pdf' && (
            <i className="ri-file-pdf-fill text-2xl text-main-purple-300"></i>
          )}
          <a href={url} download className="pl-4">
            <p>{node.attrs.fileName}</p>
          </a>
        </div>

        <button onClick={deleteBlock}>
          <i className="ri-close-circle-fill text-xl text-main-blue-200"></i>
        </button>
      </div>
    </NodeViewWrapper>
  )
}

export default FileBlock
