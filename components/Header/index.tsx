// import Theme from './components/Theme'

import dynamic from 'next/dynamic'
const Theme = dynamic(() => import('./components/Theme'), { ssr: false })

const Index = () => {
  return (
    <header>
      <Theme />
    </header>
  )
}

export default Index
