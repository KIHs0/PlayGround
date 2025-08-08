import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'
import React from 'react'

const Backdrop = () => {
  return (
    <AccumulativeShadows temporal frames={10} scale={1} position={[5, 5, 1]}>
      <RandomizedLight amount={2} position={[5, 5, -10]} radius={2} ambient={0.35} />
    </AccumulativeShadows>
  )
}

export default Backdrop