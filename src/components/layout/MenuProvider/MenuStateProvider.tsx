import { createContext, ReactNode, useState } from 'react'

// type
type IMenuStateContext = {
  isFirstLinkShow: boolean
  toggleFirstLinkShow: (isShow: boolean) => void
}

export const MenuStateContext = createContext<IMenuStateContext | null>(null)

function MenuStateProvider({ children }: { children: ReactNode }) {
  const [isFirstLinkShow, setIsFirstLinkShow] = useState(false)

  // operation
  const toggleFirstLinkShow = (isShow: boolean): void => {
    setIsFirstLinkShow(isShow)
  }

  const defaultValue = {
    isFirstLinkShow,
    toggleFirstLinkShow,
  }

  return <MenuStateContext.Provider value={defaultValue}>{children}</MenuStateContext.Provider>
}

export default MenuStateProvider
