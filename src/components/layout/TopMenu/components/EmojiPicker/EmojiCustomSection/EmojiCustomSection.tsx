import { useState, useEffect } from 'react'
import classNames from 'classnames'

// types
import { IEmojiListItem } from '../../../../../../types/constants/menuType'

function EmojiCustomSection({
  list,
  currentValue,
  insertContent,
}: {
  list: Array<IEmojiListItem>
  currentValue: string | null
  insertContent: (value: string) => void
}) {
  const [isOptionsShow, setIsOptionsShow] = useState(false)

  // effect
  useEffect(() => {
    setIsOptionsShow(false)
  }, [currentValue])

  return (
    <div className="relative" tabIndex={-1} onBlur={() => setIsOptionsShow(false)}>
      {/* top section */}
      <div
        className="w-10 h-10 flex justify-center items-center
          rounded-full overflow-hidden p-[6px] ring-main-gray-100 ring-inset ring-2 cursor-pointer"
        onClick={() => setIsOptionsShow(!isOptionsShow)}
      >
        <p className={classNames('text-2xl rounded-full')}>{currentValue}</p>
      </div>

      {/* div options: hidden on mobile */}
      {isOptionsShow && (
        <div
          className="absolute z-20 p-2 mt-1 ring-main-gray-100 ring-inset ring-2 bg-white 
            grid grid-cols-3 gap-2 rounded-[10px] drop-shadow-md
            left-1/2 -translate-x-1/2"
          style={{ width: 'max-content' }}
        >
          {list.map((item) => (
            <div
              className="w-8 h-8 flex justify-center items-center  
                rounded-full overflow-hidden p-[6px] ring-main-gray-100 ring-inset ring-2 cursor-pointer my-1"
              key={item.value}
              onClick={() => insertContent(item.value)}
            >
              <p className={classNames('text-2xl rounded-full')}>{item.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default EmojiCustomSection
