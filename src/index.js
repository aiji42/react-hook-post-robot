import { createContext, useContext, useEffect, useRef } from 'react'
import postRobot from 'post-robot'

const defaultTargetWindow = { window }
export const PostRobotContext = createContext(defaultTargetWindow)

export const usePostRobotOn = (key, callback, deps) => {
  const { window: contextWindow } = useContext(PostRobotContext)
  const listener = useRef(null)

  useEffect(() => {
    listener.current = postRobot.on(key, { window: contextWindow }, callback)
    return () => listener.current.cancel()
  }, [...deps, contextWindow])
}

export const usePostRobotSend = (key) => {
  const { window: contextWindow } = useContext(PostRobotContext)
  return (data) => postRobot.send(contextWindow, key, data)
}