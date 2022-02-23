import { themeColorList } from '../constants/themeColorList'

type IThemeColor = `${keyof typeof themeColorList}${'-100' | '-200' | '-300' | ''}`

function convertColorToCode(color: IThemeColor) {
  switch (color) {
    case 'main-purple-300':
      return themeColorList['main-purple'][300]
    case 'main-purple-200':
      return themeColorList['main-purple'][200]
    case 'main-blue-300':
      return themeColorList['main-blue'][300]
    case 'main-blue-100':
      return themeColorList['main-blue'][100]
    case 'little-blue':
      return themeColorList['little-blue']
    default:
      return themeColorList['main-blue'][100]
  }
}
export default convertColorToCode
