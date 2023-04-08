import React from 'react'
type dotProps = {
  x: number
  y: number
  size: number
  color: string
}
import 'dot.scss'
export default function ({ x, y, dx, dy, size = 30, color = 'red' }: dotProps) {
  const style = {
    left: `${x + size / 2}px`,
    top: `${y + size / 2}px`,
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: color
  }
  return <div className="dot" style={style} />
}
