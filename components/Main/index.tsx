interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {}

const Index = (props: IProps) => {
  const { children } = props
  return <main className="flex-auto">{children}</main>
}

export default Index
