'use client'

import { getData } from '@/api/test'

const Index = () => {
  const onTest = async () => {
    console.log(1)
    const data = await getData({
      key: 'username',
    })
    console.log(data)
  }
  return <button onClick={onTest}>测试</button>
}

export default Index
