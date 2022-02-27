import { useMemo } from 'react'
import { NodeViewProps, NodeViewWrapper } from '@tiptap/react'

function FileBlock({ node, deleteNode }: NodeViewProps) {
  // operation
  const deleteBlock = () => {
    deleteNode()
  }

  const url = useMemo(() => window.URL.createObjectURL(node.attrs.blob), [node.attrs.blob])

  return (
    <NodeViewWrapper className="file-block">
      <div
        className="w-full bg-little-blue px-2 py-3 rounded-[10px] my-3 flex justify-between items-center"
        data-drag-handle
      >
        <a href={url} download>
          <p>{node.attrs.fileName}</p>
        </a>

        <button onClick={deleteBlock}>
          <i className="ri-close-circle-fill text-xl text-main-blue-200"></i>
        </button>
      </div>
    </NodeViewWrapper>
  )
}

export default FileBlock
