import { useMemo } from 'react'
import { Editor } from '@tiptap/react'

// components
import SelectComponent from '../../../../common/SelectComponent'
import ColorCustomSection from '../ColorCustomSection'

// constants
import { themeColorList } from '../../../../../constants/themeColorList'

// types
import { colorType, IColorListItem } from '../../../../../types/constants/menuType'
import { themeColorType } from '../../../../../constants/themeColorList'

function ColorPicker({ editor }: { editor: Editor }) {
  const colorSelectionList = useMemo<Array<IColorListItem>>(() => {
    const tempList: Array<IColorListItem> = []

    for (const colorKey in themeColorList) {
      if (typeof themeColorList[colorKey as themeColorType] === 'object') {
        const multipleThemeColorList = themeColorList[colorKey as themeColorType] as {
          [key: number]: string
        }
        for (const strengthKey in multipleThemeColorList) {
          tempList.push({
            value: themeColorList[colorKey as themeColorType][parseInt(strengthKey)],
            text: themeColorList[colorKey as themeColorType][parseInt(strengthKey)],
            className: `${themeColorList[colorKey as themeColorType]}-${[
              parseInt(strengthKey),
            ]}` as colorType,
          })
        }
      } else {
        tempList.push({
          value: themeColorList[colorKey as themeColorType] as string,
          text: themeColorList[colorKey as themeColorType] as string,
          className: `${themeColorList[colorKey as themeColorType]}` as colorType,
        })
      }
    }
    return tempList
  }, [themeColorList])

  // operation
  const setCurrentColor = (color: string | number) => {
    if (typeof color === 'string') editor.chain().focus().setColor(color).run()
  }

  return (
    <SelectComponent list={colorSelectionList} currentValue={''} setValue={setCurrentColor}>
      <ColorCustomSection
        list={colorSelectionList}
        currentValue={editor.getAttributes('textStyle').color}
        setValue={setCurrentColor}
      />
    </SelectComponent>
  )
}

export default ColorPicker
