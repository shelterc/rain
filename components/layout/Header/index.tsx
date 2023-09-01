import dynamic from 'next/dynamic'
import Link from 'next/link'
const Theme = dynamic(() => import('./components/Theme'), { ssr: false })
const Index = () => {
  return (
    <header className="pl-30 pr-10 h-66 text-20 flex items-center justify-between border-b dark:border-#303030">
      <div className="flex gap-x-10">
        <Link href="/">home</Link>
        <Link href="/test">组件</Link>
      </div>
      <Theme />
    </header>
  )
}

export default Index
