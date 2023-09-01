import { ComponentPropsWithoutRef } from 'react'

interface IProps extends ComponentPropsWithoutRef<'main'> {}

const Index = (props: IProps) => {
  const { children } = props
  return (
    <main className={`flex-auto`}>
      {children}
    </main>
  )
}

export default Index
