import React, { useRef, useLayoutEffect } from 'react';
import { PerspectiveCamera, useGLTF, useScroll } from '@react-three/drei';
import gsap from 'gsap';
import { useFrame, useThree } from '@react-three/fiber';

export function Model(props) {
  const { size } = useThree();
  const group = useRef();
  const tl = useRef();
  const camera = useRef();
  const { nodes, materials } = useGLTF('kingfinal.glb');
  const scroll = useScroll();
  useFrame(()=>{
    tl.current.seek(scroll.offset * tl.current.duration())
  })

  useLayoutEffect(() => {
    tl.current = gsap.timeline({ defaults: { duration: 30, ease: 'power3.inOut' } });
  
    tl.current
      // Rotate the group
      .to(group.current.rotation, { x: 0, y: Math.PI * 2, z: 0 })
  
      // Scale down the group
      .to(group.current.scale, { x: 1.5, y: 1.5, z: 1.5 }, "<") // "<" means relative to the previous animation
  
      // Change position
      .to(group.current.position, { x: -1, y: -2.0, z: -.2 }, "<") // "<" means relative to the previous animation
  
    // Reverse the timeline to play animations from end to start

    .to(group.current.scale, { x: 3.5, y: 3.5, z: 3.5 }) 
    .to(group.current.position, { x: -1.3, y: -1.86, z: 0 })
    .to(group.current.rotation, { x: 0, y: Math.PI * 2 , z: -0.23 })
    tl.current
    .to(camera.current.position,{x:0, y:0, z:-1.2})
  }, []);
  
  
  const fov = size.width >= 1024 ? 35 : 38;
  const offset = size.width >= 1024 ? -0.1: -0.25;


  return (
    <group {...props} dispose={null} >
      <group name="Scene">
        {/* <ambientLight intensity={1}/>
        <pointLight intensity={1.9} position={[.51, 1.40, 1]} /> */}
        <PerspectiveCamera makeDefault={true} far={1000} near={.0001} fov={fov} position={[-5.483, -0.8, offset]} rotation={[0.786, -1.506, 0.785]} scale={6.039} ref={camera} />
        <mesh ref={group} name="KING" geometry={nodes.KING.geometry} material={materials.Material_0} position={[0, -1.40, 0]} scale={3.299} >

          </mesh>
      </group>
    </group>
  );
}
