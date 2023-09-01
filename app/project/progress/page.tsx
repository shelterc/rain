'use client'
import { useRef, useState } from 'react'

const Index = () => {
  const timer = useRef<any>(null)

  const [width, setWidth] = useState<number>(0)
  const [count, setCount] = useState<number>(0)

  const run1 = () => {
    if (width < 500) {
      const newWidth = width + 5
      setWidth(newWidth)
      setCount(newWidth / 5)
      timer.current = requestAnimationFrame(run1)
    }
  }

  const run2 = () => {
    timer.current = requestAnimationFrame(function fn() {
      if (width < 500) {
        const newWidth = width + 5
        setWidth(newWidth)
        setCount(newWidth / 5)
        requestAnimationFrame(fn)
      } else {
        cancelAnimationFrame(timer.current)
      }
    })
  }

  //  定时器
  const run4 = () => {
    requestAnimationFrame(function fn() {
      if (width < 500) {
        setWidth(e => {
          const newWidth = e + 5
          if (newWidth < 500) {
            timer.current = requestAnimationFrame(fn)
          }
          setCount(newWidth / 5)
          return newWidth
        })
      }
    })
  }

  const run5 = () => {
    if (width < 500) {
      setWidth(e => {
        const newWidth = e + 5
        if (newWidth < 500) {
          timer.current = requestAnimationFrame(run5)
        }
        setCount(newWidth / 5)
        return newWidth
      })
    }
  }

  const start = () => {
    run5()
  }

  const pause = () => {
    cancelAnimationFrame(timer.current)
  }

  const reset = () => {
    cancelAnimationFrame(timer.current)
    setWidth(0)
    setCount(0)
  }

  return (
    <div>
      <h1>测试进度条动画-requestAnimationFrame api</h1>
      <div className={`h-40px bg-pink color-blue`} style={{ width: width + 'px' }}>
        {count}%
      </div>
      <div className="flex gap-10px">
        <button onClick={start}>开始</button>
        <button onClick={pause}>暂停</button>
        <button onClick={reset}>重置</button>
      </div>
    </div>
  )
}

export default Index
