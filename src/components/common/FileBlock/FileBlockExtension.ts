import { Node, mergeAttributes } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'
import FileBlock from './FileBlock'

// types
declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    fileBlockCustomExtension: {
      addFileBlock: (file: File, fileType: string) => ReturnType
    }
  }
}

const FileBlockExtension = Node.create({
  name: 'FileBlock',

  group: 'block',

  atom: true,

  draggable: true,

  addAttributes() {
    return {
      fileName: {
        default: '',
      },
      blob: {
        default: {},
      },
      fileType: {
        default: '',
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'file-block',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['file-block', mergeAttributes(HTMLAttributes)]
  },

  addNodeView() {
    return ReactNodeViewRenderer(FileBlock)
  },

  addCommands() {
    return {
      addFileBlock:
        (file: File, fileType: string) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: {
              fileName: file.name,
              blob: file,
              fileType,
            },
          })
        },
    }
  },
})

export default FileBlockExtension
