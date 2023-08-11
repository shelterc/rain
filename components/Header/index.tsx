// import Theme from './components/Theme'

import dynamic from 'next/dynamic'
const Theme = dynamic(() => import('./components/Theme'), { ssr: false })

const Index = () => {
  return (
    <header className="p-l-30px p-r-30px h-66px flex items-center">
      <Theme />
    </header>
  )
}

export default Index
