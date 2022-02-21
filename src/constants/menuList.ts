import { ISizeListItem } from '../types/constants/menuType'

export const sizeList: Array<ISizeListItem> = [
  {
    value: 'h1',
    text: 'Heading 1',
    className: 'text-2xl',
  },
  {
    value: 'h2',
    text: 'Heading 2',
    className: 'text-xl',
  },
  {
    value: 'h3',
    text: 'Heading 3',
    className: 'text-lg',
  },
  {
    value: 'p',
    text: 'Paragraph',
    className: 'text-base',
  },
  {
    value: 'annotation',
    text: 'Annotation',
    className: 'text-small',
  },
]

export const ColorPickerList = [
  'main-orange-300',
  'main-orange-200',
  'main-blue-300',
  'main-blue-100',
  'little-blue',
]
