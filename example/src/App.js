import React, { useEffect, useState } from 'react'
import { usePostRobotOn, usePostRobotSend, PostRobotContext } from 'react-hook-post-robot'

const SampleComponentParent = (props) => {
  // In fact, you can specify an contentWindow of iframe.
  // You can fix the window under the Context.
  return <PostRobotContext.Provider value={{ window }} {...props} />
}

const SampleComponentChild = () => {
  const [state, setState] = useState(null)

  // Instead of postRobot.on('test', () => message)
  usePostRobotOn('test', () => {
    return 'Hello, react-hook-post-robot!'
  }, [])

  // Instead of postRobot.send('test', ({ data }) => setState(data))
  const sender = usePostRobotSend('test')
  useEffect(() => {
    sender().then(({ data }) => setState(data))
  })

  return (
    <>{state}</>
  )
}

const App = () => {
  return (
    <SampleComponentParent>
      <SampleComponentChild />
    </SampleComponentParent>
  )
}

export default App