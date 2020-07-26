# react-hook-post-robot

> It&#x27;s easy to use &quot;robot-post&quot; on React&#x27;s components.

[![NPM](https://img.shields.io/npm/v/react-hook-post-robot.svg)](https://www.npmjs.com/package/react-hook-post-robot) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Build Status](https://travis-ci.org/aiji42/react-hook-post-robot.svg?branch=master)](https://travis-ci.org/aiji42/react-hook-post-robot)

## Install

```bash
npm install --save react-hook-post-robot
```

## Usage

```jsx
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
  }, [])

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
```

## License

MIT © [aiji42](https://github.com/aiji42)

## Inspiration
This library is inspired by:
- [post-robot](https://github.com/krakenjs/post-robot)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
