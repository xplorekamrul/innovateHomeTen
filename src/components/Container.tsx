import { FC } from "react"

interface IContainer {
  className?: string 
  children?:React.ReactNode
}
export const Container:FC<IContainer> = ({children,className}) => {
  return (
    <div className={`max-w-[1320px] m-auto ${className}`}>{children}</div>
  )
}
