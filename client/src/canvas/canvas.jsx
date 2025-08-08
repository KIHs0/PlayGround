import React from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Center, PerspectiveCamera } from '@react-three/drei'
import Shirt from './shirt'
import Camerarig from './camerarig'
import Backdrop from './backdrop'
const CanvasModel = () => {

    return (

        <Canvas
            camera={{
                position: [0, 0, 10], fov: 75
            }}
        >
            {/* <ambientLight intensity={1.5} /> */}
            <Environment preset='forest' />
            <Camerarig>
                <Backdrop />
                <Center>
                    <Shirt />
                </Center>
            </Camerarig>
        </Canvas >

    )
}

export default CanvasModel