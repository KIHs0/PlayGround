import React, { useRef } from 'react'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import { useFrame } from '@react-three/fiber'
import { Decal, Loader, OrbitControls, useGLTF, useTexture, Wireframe } from '@react-three/drei'

import state from '../store/store'

const shirt = () => {
    const group = useRef()
    const snap = useSnapshot(state)
    const { nodes, materials } = useGLTF('/shirt_baked.glb', true, true, Loader => {
        Loader.setCrossOrigin("anonymous")
    })
    const fullTexture = useTexture(snap.fullDecal)
    const logoTexture = useTexture(snap.logoDecal)
    const statestring = JSON.stringify(snap)
    useFrame((state, delta) => {
        if (snap.intro) {

            group.current.rotation.y += delta * 2;
        }
        easing.dampC(materials.lambert1.color, snap.color, 0.25, delta)
    })
    return (
        <group key={statestring} >
            <mesh ref={group} castShadow geometry={nodes.T_Shirt_male.geometry} material={materials.lambert1}
                material-roughness={2} dispose={null} >
                {snap.isLogoTexture && (
                    <Decal
                        position={[0, 0.04, 0.15]} // Position of the decal
                        rotation={[0, 0, 0]} // Rotation of the decal (can be a vector or a degree in radians)
                        scale={0.25} // Scale of the decal
                        map={logoTexture}
                    />
                )}
                {snap.isFullTexture && (
                    <Decal
                        // debug // Makes "bounding box" of the decal visible
                        position={[0, 0, 0]} // Position of the decal
                        rotation={[0, 0, 0]} // Rotation of the decal (can be a vector or a degree in radians)
                        scale={0.75} // Scale of the decal
                        map={fullTexture}
                    />
                )}
                {/* <Wireframe /> */}
            </mesh>
        </group >
    )
}

export default shirt