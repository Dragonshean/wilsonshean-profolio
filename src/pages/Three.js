import React, { Suspense } from 'react' //引入一個 Suspense 給3D 因為有用useLoader 要用這個去fetch
import { Canvas } from '@react-three/fiber'
import { Box3D } from '../components/Box3D'
import { OrbitControls } from '@react-three/drei' //加入可旋轉3D的function





function Three () {



        
    return (
        <Canvas className='Box3D-container'>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <Suspense fallback={null}>
                <Box3D/>
            </Suspense>
        </Canvas>
    )
};


export default Three