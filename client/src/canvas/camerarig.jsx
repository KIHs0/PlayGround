import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useSnapshot } from 'valtio'
import state from '../store/store'
import { easing } from 'maath'

const Camerarig = ({ children }) => {
  const group = useRef()
  const snap = useSnapshot(state)
  useFrame((state, delta) => {
    let targetPosition = [-.1, -.1, 1]
    let isbreakpoint = window.innerWidth <= 1260;
    let ismobile = window.innerWidth <= 600;

    if (snap.intro) {
      if (isbreakpoint) targetPosition = [0, 0, 1];
      if (ismobile) targetPosition = [0, 0.2, 2.5];

    } else {
      if (ismobile) targetPosition = [0, 0, 2.5];
      else targetPosition = [0, 0, 1];
    }
    easing.damp3(state.camera.position, targetPosition, 0.25, delta * 1.2)
    easing.dampE(group.current.rotation, [state.pointer.y / 10 * 13, -state.pointer.x / 5 * 33, 0], 0.50, delta * 200)
  })
  //set the model roation smoothly 
  return (
    <group ref={group}>{children}</group>
  )
}

export default Camerarig