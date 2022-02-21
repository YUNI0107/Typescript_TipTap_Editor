import { ReactNode } from 'react'

// styles
const BasicButton =
  'text-[24px] p-2 rounded-[10px] w-[40px] h-[40px] flex justify-center items-center mr-2'

const ButtonStatus = {
  basic: `${BasicButton} bg-main-gray-100 text-main-blue-100 hover:bg-main-purple-100`,
  active: `${BasicButton} bg-main-purple-300 text-white`,
}

function CommandButton({
  children,
  handleClick,
  isActive,
}: {
  children?: ReactNode
  handleClick?: () => void
  isActive?: boolean
}) {
  return (
    <button onClick={handleClick} className={ButtonStatus[isActive ? 'active' : 'basic']}>
      {children}
    </button>
  )
}

export default CommandButton
