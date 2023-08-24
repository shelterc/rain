import { ComponentPropsWithoutRef } from 'react'

interface IProps extends ComponentPropsWithoutRef<'main'> {}

const Index = (props: IProps) => {
  const { children, className, ...attr } = props
  return (
    <main className={`${className} flex-auto`} {...attr}>
      {children}
    </main>
  )
}

export default Index
