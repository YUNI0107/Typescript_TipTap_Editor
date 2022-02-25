import { themeColorType } from '../../constants/themeColorList'

type fontSizeType = 'h1' | 'h2' | 'h3' | 'p' | 'annotation'
export interface ISizeListItem {
  value: fontSizeType
  text: string
  className: string
}

type colorType = `${Exclude<themeColorType, 'little-blue'>}-${100 | 200 | 300}` | 'little-blue'
export interface IColorListItem {
  value: colorType
  text: string
  className: string
}
