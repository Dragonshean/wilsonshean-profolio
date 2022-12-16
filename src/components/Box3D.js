import React from 'react'
import { useLoader } from '@react-three/fiber' //
import { TextureLoader } from 'three/src/loaders/TextureLoader' //



export const Box3D = () => {
  

    return (
        <mesh rotation={[90, 0, 20]}>
            <boxGeometry attach="geometry" args={[3, 3, 3]} />
            <meshLambertMaterial attach="material" color="blue" />
        </mesh>
    )
}
