import { useState, useEffect } from 'react'
import classNames from 'classnames'

// types
import { ISizeListItem } from '../../../../../types/constants/menuType'

interface IBlockStyle {
  top?: string
  'top-active'?: string
  'option-container'?: string
  option?: string
  'option-container-active'?: string
  'option-last'?: string
  'option-current'?: string
}

function SelectCustomSection({
  list,
  currentValue,
  setValue,
  blockStyle,
}: {
  list: Array<ISizeListItem>
  currentValue: string | null
  setValue: (value: string | number) => void
  blockStyle?: IBlockStyle
}) {
  const [isOptionsShow, setIsOptionsShow] = useState(true)

  // effect
  useEffect(() => {
    setIsOptionsShow(false)
  }, [currentValue])

  return (
    <div
      className="relative w-full min-w-[200px]"
      tabIndex={-1}
      onBlur={() => setIsOptionsShow(false)}
    >
      {/* top section */}
      <div
        className={
          blockStyle &&
          classNames(blockStyle['top'], {
            ...(blockStyle['top-active'] && { [blockStyle['top-active']]: isOptionsShow }),
          })
        }
        onClick={() => setIsOptionsShow(!isOptionsShow)}
      >
        <h1>{list.find((item) => item.value === currentValue)?.text}</h1>
        <i
          className={classNames('ri-arrow-drop-down-line text-2xl transition duration-700', {
            '-rotate-180': isOptionsShow,
          })}
        ></i>
      </div>

      {/* div options: hidden on mobile */}
      <div
        className={
          blockStyle &&
          classNames(blockStyle['option-container'], {
            ...(blockStyle['option-container-active'] && {
              [blockStyle['option-container-active']]: isOptionsShow,
            }),
          })
        }
      >
        {list.map(({ value, text, className: eachClassName }, index) => {
          const lastItem = index === list.length - 1

          return (
            <div
              key={value}
              className={
                blockStyle &&
                classNames(blockStyle['option'], eachClassName, {
                  ...(blockStyle['option-last'] && { [blockStyle['option-last']]: lastItem }),
                  ...(blockStyle['option-current'] && {
                    [blockStyle['option-current']]: currentValue === value,
                  }),
                })
              }
              onClick={() => setValue(value)}
            >
              <p>{text}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SelectCustomSection
