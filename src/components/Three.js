import * as THREE from "three";
import React from 'react'
import { Canvas } from '@react-three/fiber'



export const Three = () => {
    
        //創建場景
        const scene = new THREE.Scene();

        //創建相機  參數: (FOV視野'角度', 長寬比, 進截面, 遠截面)
        const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
        );
        camera.position.z = 5;


        //創建WebGL 渲染器
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(100, 100);
        document.querySelector('#canvas-container').appendChild(renderer.domElement)

        //創建立方體
        const geometry = new THREE.BoxGeometry(10, 10, 10);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        

        //執行渲染
        function animate() {
            requestAnimationFrame(animate);

            //使立體動起來
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        }
        animate();
    
    return (
        <div id="canvas-container">
            <Canvas>
                <ambientLight intensity={0.1} />
                <directionalLight color="red" position={[0, 0, 5]} />
                <mesh>
                    <boxGeometry />
                    <meshStandardMaterial />
                </mesh>
            </Canvas>
        </div>
    )
};
