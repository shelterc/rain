import dynamic from 'next/dynamic'
const Theme = dynamic(() => import('./components/Theme'), { ssr: false })
const Test = dynamic(() => import('./components/Test'), { ssr: false })
const Index = () => {
  return (
    <header className="p-l-30px p-r-30px h-66px flex items-center">
      这是头部
      <Theme />
      <Test />
    </header>
  )
}

export default Index
