// import React, { Suspense } from 'react' //引入一個 Suspense 給3D 因為有用useLoader 要用這個去fetch
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei' //加入可旋轉3D的function
import { Model } from '../components/Kratoshouse'
import React from 'react'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'







function Three () {

        
    return (
        <Canvas 
            className='Box3D-container' 
            camera={{position: [-50, 30, 10], fov: 30}}        
        >
            <OrbitControls enableZoom={true} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <Model />
        </Canvas>
    )
};


export default Three