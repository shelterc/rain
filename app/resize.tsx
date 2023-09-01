'use client'

import { debounce } from '@/utils'
import { useEffect } from 'react'

const Resize = ({ children }: { children: any }) => {
  function resizeRem() {
    let docDocument = document.documentElement
    let docWidth = docDocument.clientWidth
    if (docWidth <= 768) {
      docDocument.style.fontSize = docWidth / 10 + 'px'
    } else {
      docDocument.style.fontSize = ''
    }
  }
  useEffect(() => {
    resizeRem()
    window.addEventListener('resize', debounce(resizeRem, 0), false)
  }, [])
  return <>{children}</>
}

export default Resize
