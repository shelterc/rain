import { getData } from '@/api/test'
import Link from 'next/link'

const test = async () => {
  const res = await getData({
    key: 'username',
  })
  return res.data
}

const Index = async () => {
  const { data }: { data: Array<string> } = await test()
  return (
    <div className="text-30px">
      <div>列表</div>
      <ul>
        {data.length > 0 &&
          data.map(item => {
            return (
              <li className="name">
                <Link href={item}>{item}</Link>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default Index
