import { useMemo } from 'react'

// components
import SelectComponent from '../../../../common/SelectComponent'

// constants
import { themeColorList } from '../../../../../constants/themeColorList'

// types
import { ISizeListItem } from '../../../../../types/constants/menuType'

function ColorPicker() {
  const colorSelectionList = useMemo<Array<ISizeListItem>>(() => {
    // const tempList = []
    for (const colorKey in themeColorList) {
      console.log(colorKey)
    }
    return []
  }, [themeColorList])

  // operation
  const setCurrentColor = (color: string | number) => {
    console.log(color)
  }

  return (
    <SelectComponent
      list={colorSelectionList}
      currentValue={''}
      setValue={setCurrentColor}
    ></SelectComponent>
  )
}

export default ColorPicker
