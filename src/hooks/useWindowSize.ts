import { useLayoutEffect, useState } from 'react'

const useWindowSize = (): [number, number] => {
  const [size, setSize] = useState([0, 0] as [number, number])

  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight])
    }

    window.addEventListener('resize', updateSize)
    updateSize()

    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return size
}

export default useWindowSize
