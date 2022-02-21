// types
import { Editor } from '@tiptap/react'

function convertCurrentFontValue(editor: Editor): string {
  let value: string | null = null

  if (editor.isActive('heading', { level: 1 })) {
    value = 'h1'
  } else if (editor.isActive('heading', { level: 2 })) {
    value = 'h2'
  } else if (editor.isActive('heading', { level: 3 })) {
    value = 'h3'
  }
  // set annotation container to paragraph, so need to be careful that the editor will detect editor.isActive('paragraph') true
  else if (editor.isActive('paragraph') && editor.isActive('textStyle', { fontSize: 12 })) {
    value = 'annotation'
  } else if (editor.isActive('paragraph')) {
    value = 'p'
  }

  return value ? value : 'h1'
}

export default convertCurrentFontValue
