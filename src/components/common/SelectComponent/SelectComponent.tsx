import { ReactNode, useRef } from 'react'
import classNames from 'classnames'

// types
import { ISizeListItem } from '../../../types/constants/menuType'
import { IColorListItem } from '../../../types/constants/menuType'

function SelectComponent<T extends ISizeListItem | IColorListItem>({
  list,
  currentValue,
  setValue,
  children,
}: {
  list: Array<T>
  currentValue: string | number
  setValue: (value: string | number) => void
  children?: ReactNode
}) {
  const select = useRef<HTMLSelectElement | null>(null)

  return (
    <div className="relative">
      {/* select: hidden on tablet & desktop show default layout design by each browser on mobile */}
      <select
        className="block w-full h-full absolute top-0 left-0 z-10 opacity-0 sm:pointer-events-none"
        defaultValue={currentValue}
        onChange={(e) => setValue(e.target.value)}
        ref={select}
      >
        {list.map(({ value, text, className }) => (
          <option
            value={value}
            key={value}
            className={classNames(className, 'block sm:hidden')}
            style={{ background: 'red' }}
          >
            {text}
          </option>
        ))}
      </select>

      {children}
    </div>
  )
}

export default SelectComponent
