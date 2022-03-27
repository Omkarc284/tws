import React, { useState, Suspense, useRef, useEffect} from 'react';
import ReactGa from 'react-ga';
import './App.css';
import * as THREE from 'three';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import OGs from './components/OGs';
import ION from './components/ION';
import Destination from './components/Destination';
import atmosphereVertexShader from './shaders/atmosphereVertex.glsl'
import atmosphereFragmentShader from './shaders/atmosphereFragment.glsl'
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {Stars, useGLTF, Float, OrbitControls, PresentationControls} from "@react-three/drei";
import gsap from 'gsap';
import useWindowDimensions from './components/WindowSize';

var loaded = false
var zone;
function Stamp () {
  const scene = useGLTF("/models/Stamp_1.glb");
  return (
    <mesh>
      <primitive object={scene.scene} dispose ={null} />
    </mesh>
    
  )
}
function Stamp1 () {
  const scene = useGLTF("/models/Stamp_2.glb");
  return (
    <mesh>
      <primitive object={scene.scene} dispose ={null} />
    </mesh>
    
  )
}
function Gun () {
  const scene = useGLTF("/models/Gun.glb");
  return (
    <mesh>
      <primitive object={scene.scene} dispose ={null} />
    </mesh>
    
  )
}
function Chainsaw () {
  const scene = useGLTF("/models/chainsaw.glb");
  return (
    <mesh>
      <primitive object={scene.scene} dispose ={null} />
    </mesh>
    
  )
}
function Knife () {
  const scene = useGLTF("/models/knife.glb");
  return (
    <mesh>
      <primitive object={scene.scene} dispose ={null} />
    </mesh>
    
  )
}
function Uzi () {
  const scene = useGLTF("/models/uzi.glb");
  return (
    <mesh>
      <primitive object={scene.scene} dispose ={null} />
    </mesh>
    
  )
}
function CashBundle () {
  const scene = useGLTF("/models/cash_bundle.glb");
  return (
    <mesh>
      <primitive object={scene.scene} dispose ={null} />
    </mesh>
  )
}
function CashBundle1 () {
  const scene = useGLTF("/models/cash_bundle1.glb");
  return (
    <mesh>
      <primitive object={scene.scene} dispose ={null} />
    </mesh>
  )
}
function CashBundle2 () {
  const scene = useGLTF("/models/cash_bundle2.glb");
  return (
    <mesh>
      <primitive object={scene.scene} dispose ={null} />
    </mesh>
  )
}
function CashBundle3 () {
  const scene = useGLTF("/models/cash_bundle3.glb");
  return (
    <mesh>
      <primitive object={scene.scene} dispose ={null} />
    </mesh>
  )
}
function Dollar () {
  const scene = useGLTF("/models/dollar_bill.glb");
  return (
    <mesh>
      <primitive object={scene.scene} dispose ={null} />
    </mesh>
  )
}
function Beer () {
  const scene = useGLTF("/models/beer.glb");
  return (
    <mesh>
      <primitive object={scene.scene} dispose ={null} />
    </mesh>
  )
}
function Planet() {
  const pref = useRef();
  useFrame(()=> (pref.current.rotation.y += 0.0002))
  const planet = useGLTF("/models/Planet.glb");
  return (
    <mesh ref={pref} position={[-100,-120,100]} scale={[0.7,0.7,.7]}>
      <primitive object={planet.scene} dispose={null}/>
    </mesh>
  )

}
function Atmosphere () {
  const aref = useRef();
  useFrame(()=> (aref.current.rotation.y += 0.0002))
  var scene = new THREE.Scene();

  const atmosphere = new THREE.Mesh(
    new THREE.SphereGeometry(40,200,200),
    new THREE.ShaderMaterial({
      vertexShader: atmosphereVertexShader,
      fragmentShader: atmosphereFragmentShader,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide
    })
  );
  atmosphere.scale.set(0.95,0.95,0.95);
  scene.add(atmosphere);
  
  return (
    <mesh ref={aref} position={[-100, -120,100]} scale={[0.7,0.7,0.7]}>
      <primitive object={scene} dispose={null}/>
    </mesh>
  )
}
const Ion = () => {
  const scene = useGLTF("/models/Spaceship.glb");
  const iref = useRef();
  useFrame(()=> (iref.current.rotation.x += 0.0002))
  return (
    <mesh ref={iref} position={[-60, -30, -30]} scale={[0.085,0.085,0.085]}>
      <primitive object={scene.scene} dispose ={null} />
    </mesh>
    
  )
}
const Spaceman = () => {
  const scene = useGLTF("/models/astro.glb");
  return (
    <mesh scale={[0.007,0.007,0.007]}>
      <primitive object={scene.scene} dispose ={null} />
    </mesh>
    
  )
}
const Lights = () => {
  return (
    <>
      <pointLight intensity={1.3} position={[-100, 100,100]} castShadow color='#0c8cbf' />
      <spotLight  intensity={1} position={[1000,500,0]}/>
    </>
    
  )
}
function Dolly() {
  var center = new THREE.Vector3(0,0,0);
  var center1 = new THREE.Vector3(5,0,0);
  useFrame(({ camera }) => {
    if (zone == 1){
      gsap.to( camera.position, {
        duration: 1,
        x: 0.18,
        y: 0,
        z: 0.18,
        onUpdate: function() {
          camera.lookAt( center );  
        }
      });
      
    }
    else if (zone == 0 && loaded == true) {
      gsap.to( camera.position, {
        duration: 15,
        x: 5,
        y: 0,
        z: 5 ,
        ease: "elastic",
        onUpdate: function() {
          camera.lookAt( center );
        }
      });
    } 
    else if (zone == 2) {
      gsap.to( camera.position, {
        duration: 6,
        x: 52.1,
        y: 43.1,
        z: 42.8,
        ease: "elastic",
        onUpdate: function() {
          camera.lookAt( center1 );
        }
      });
    }
    else if (zone == 3) {
      gsap.to( camera.position, {
        duration: 6,
        x: -80,
        y: -41,
        z: -45,
        ease: "elastic",
        onUpdate: function() {
          camera.lookAt( center1 );
        }
        
      });
      
    }
    else if (zone == 4) {
      gsap.to(camera.position, {
        duration: 5,
        x: -130,
        y: -170,
        z: 215,
        ease: "elastic",
        onUpdate: function() {
          camera.lookAt(center1)
        }
      })

    }            
  });
  
  return null
}
function loader () {
  loaded = true
}
const Socials = () =>{
  return(
    <div className='social-div'>
      <ul className='social-ul'>
        <div style={{color: 'white', textAlign:'left', fontSize: '1vw'}}>Follow us:</div>
        <div className="social">
          <li><a href="https://instagram.com"><img src="instagram.png"/></a></li>
          <li><a href="https://twitter.com"><img src="twitter.png"/></a></li>
          <li><a href="https://discord.com"><img src="discord.png"/></a></li>
        </div>
        
      </ul>
    </div>
    
  )
}
function App() {
  useEffect(()=>{
    ReactGa.initialize('G-S71Y79P0XF');
    ReactGa.pageview('/');
  },[])
  useGLTF.preload(['/models/Stamp_1.glb', '/models/Stamp_2.glb','/models/Gun.glb', '/models/ion.glb', '/models/cash_bundle.glb', '/models/cash_bundle1.glb', '/models/cash_bundle2.glb', '/models/cash_bundle3.glb', '/models/chainsaw.glb', '/models/dollar_bill.glb', '/models/knife.glb', '/models/astro.glb', '/models/beer.glb', '/models/Planet.glb', '/models/Spaceship.glb', '/models/uzi.glb'])
  const { height, width } = useWindowDimensions();
  var [id, setid] = useState(0)
  const setState = (num) => {
    setid(id = num);
    zone = id;
    console.log("Id: ", id)
  }
  
  return (
    <div className='App' id='canvas-container'>
      <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css' />
      <meta name="viewport" content="width=device-width"/>
      { width < 501 && (
        <>
          <span style={{color: 'rgba(255,255,255, 1)', alignContent: 'center'}}>Rotate to Landscape.</span>
          <div className='rotate'>
          <img src="rotate_med.gif"/>
          </div>
          
        </>
      )}
      { width > 500 && (
        <>
          <Navbar setState = {setState}/>
          <Socials/>
          <Canvas shadows onLoad={loader()} style={{position: 'fixed', touchAction: 'auto'}} colorManagement camera={{position: [220 , 220, 220], fov: 20}} >
          {loaded && (
          <>
          {/* <OrbitControls /> */}
          
          <Lights/>
          {/* <gridHelper scale={[10,10,10]}/>
          <axesHelper /> */}
          <pointLight position={[100, 100, 100]} intensity={1.3} />
          <pointLight position={[150, -100, 5]} intensity={1.3} />
          <Stars radius={210}/>
          <Suspense fallback={null}>
          <PresentationControls config={{ mass: 2, tension: 500 }} snap={{ mass: 4, tension: 1500 }} rotation={[0, 0, 0]} polar={[-Math.PI / 2, Math.PI / 3]} azimuth={[-Math.PI / 2, Math.PI / 2]} >
            <Float position={[-0.030, 0, 0.01]} rotation={[0, -0.3, 0]} floatIntensity={2} scale={[0.002, 0.002, 0.002]} speed={0.8}>
              <Stamp/>
            </Float>
            <Float position={[1, 0, 2.5]} rotation={[0, -0.3, 0]} floatIntensity={3} scale={[0.03, 0.03, 0.03]} speed={1.5}>
              <Stamp1/>
            </Float>
            <Float position={[2.5, 0, 1]} rotation={[0, -0.3, 0]} floatIntensity={3} scale={[0.12, 0.12, 0.12]} speed={1.5}>
              <Beer/>
            </Float>
            <Float position={[0.3, 0.6, 2.5]} rotation={[0, -0.3, 0]} floatIntensity={3} scale={[0.007, 0.007, 0.007]} speed={1.5}>
              <Knife/>
            </Float>
            <Float position={[3, -0.5, 2]} rotation={[2, -0.8, 0.2]} floatIntensity={3} scale={[0.006, 0.006, 0.006]} speed={1.5}>
              <Uzi/>
            </Float>
            <Float position={[3, 0.5, 2]} rotation={[2, -0.8, 0.2]} floatIntensity={3} scale={[0.006, 0.006, 0.006]} speed={1.5}>
              <CashBundle/>
            </Float>
            <Float position={[1.25, -0.5, 3]} rotation={[-2, 0.8, 0.2]} floatIntensity={3} scale={[0.006, 0.006, 0.006]} speed={1.5}>
              <CashBundle1/>
            </Float>
            <Float position={[49.8, 41.1, 40.7]} rotation={[0.6, 0.4, 0]} floatIntensity={3} scale={[0.006, 0.006, 0.006]} speed={1.7}>
              <CashBundle2/>
            </Float>
            <Float position={[50.3, 41.125, 41]} rotation={[0.6, 0, 0.2]} floatIntensity={3} scale={[0.006, 0.006, 0.006]} speed={1.7}>
              <CashBundle3/>
            </Float>
            <Float position={[3, -0.4, 3]} rotation={[Math.PI/2, 0, -Math.PI/3]} floatIntensity={3} scale={[0.12, 0.12, 0.12]} speed={1.5}>
              <Dollar/>
            </Float>
            <Float position={[0.9, 0, 0.2]} rotation={[0, 0, 0]} floatIntensity={3} scale={[0.005, 0.005, 0.005]} speed={1.5}>
              <Chainsaw/>
            </Float>
            <Float position={[0.12, -0.25, 0.19]} rotation={[0, 0, 0]} floatIntensity={3} scale={[0.05, 0.05, 0.05]} speed={1.5}>
              <Gun/>
            </Float>
          </PresentationControls>
          
          <Ion/>
          <Float position={[50, 40, 40]} floatIntensity={1.5} speed={0.08}>
              <Spaceman />
          </Float>
          
          </Suspense>
          <Suspense fallback={null}>
              <Atmosphere/>
              <Planet />
          </Suspense>
         
          <Dolly/>
          </>
          )}
          
          </Canvas>
          <div className='App-body'>
          
          <section className='section' id='0'>
            <Home/>
          </section>
      
          <section className='section' id='1'>
            <About/>
          </section>
      
          <section className='section' id='2'>
            <OGs/>
          </section>
      
          <section className='section' id='3'>
            <ION/>
          </section>
      
          <section className='section' id='5'>
            <Destination/>
          </section>
         
          </div>
          
        </>
        ) }
      
       
        
        
      
    </div>
    
  )
}

export default App
