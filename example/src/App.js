import React from 'react'
import { useMyHook } from 'react-hook-post-robot'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App