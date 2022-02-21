// utils
import convertCurrentFontValue from '../../../../../utils/convertCurrentFontValue'

// components
import SelectComponents from '../../../../common/SelectComponent'
import SelectCustomSection from '../SelectCustomSection'

// constants
import { sizeList } from '../../../../../constants/menuList'

// types
import { Editor } from '@tiptap/react'

// style
const TopBlockStyle =
  'w-full border-2 border-main-blue-100 px-2 py-[2px] bg-white rounded-[10px] flex justify-between cursor-pointer'
const TopBlockActiveStyle = 'sm:rounded-b-[0px]'
const OptionContainerStyle =
  'absolute hidden z-10 left-0 w-full bg-white border-2 border-main-blue-100 rounded-b-[10px] -mt-1 overflow-hidden'
const OptionContainerActiveStyle = 'sm:block'
const OptionStyle =
  'block w-full p-2 cursor-pointer border-b-[1px] border-main-gray-10 hover:bg-little-blue'
const OptionLastStyle = 'border-none'
const OptionCurrentStyle = 'bg-main-purple-100 hover:bg-main-purple-100'

const blockStyle = {
  top: TopBlockStyle,
  'top-active': TopBlockActiveStyle,
  'option-container': OptionContainerStyle,
  'option-container-active': OptionContainerActiveStyle,
  option: OptionStyle,
  'option-last': OptionLastStyle,
  'option-current': OptionCurrentStyle,
}

function HeadingSelect({ editor }: { editor: Editor }) {
  // operation
  const setHeadingValue = (value: string | number) => {
    switch (value) {
      case 'h1':
        editor.chain().focus().unsetFontSize().setHeading({ level: 1 }).run()
        break
      case 'h2':
        editor.chain().focus().unsetFontSize().setHeading({ level: 2 }).run()
        break
      case 'h3':
        editor.chain().focus().unsetFontSize().setHeading({ level: 3 }).run()
        break
      case 'p':
        editor.chain().focus().unsetFontSize().setParagraph().run()
        break
      case 'annotation':
        editor.chain().focus().setParagraph().setFontSize(12).run()
        break
    }
  }

  return (
    <SelectComponents
      currentValue={convertCurrentFontValue(editor)}
      setValue={setHeadingValue}
      list={sizeList}
    >
      {/*  show custom select layout */}
      <SelectCustomSection
        currentValue={convertCurrentFontValue(editor)}
        setValue={setHeadingValue}
        list={sizeList}
        blockStyle={blockStyle}
      />
    </SelectComponents>
  )
}

export default HeadingSelect
