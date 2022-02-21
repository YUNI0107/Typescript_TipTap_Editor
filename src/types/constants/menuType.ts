type fontSizeType = 'h1' | 'h2' | 'h3' | 'p' | 'annotation'

export interface ISizeListItem {
  value: fontSizeType
  text: string
  className: string
}
