
import { Model } from '../src/Component/Kingfinal.jsx';

import { Html, useProgress } from '@react-three/drei'



import './App.css';
// import { CameraProvider } './Component/Cameramove.jsx';
import { Scroll, ScrollControls, SpotLight } from '@react-three/drei';
import { Suspense } from 'react';


function App() {
  

  function Loader() {
    const { progress } = useProgress()
    return <Html wrapperClass='load' center>{progress} %</Html>
  }

  return (




  

    <ScrollControls distance={14} pages={3.15} damping={0.7}>
     <SpotLight intensity={50} color={"blue"} position={[-8,11,14]} />   
    
     <ambientLight intensity={5} color={"RED"}/> 
     <Suspense fallback={<Loader/>}>
     <Model />
     </Suspense>
               <Scroll html >
               <div className='wrapper'>
   
 
   <div className='d'>
  PEPL.
   </div>
 
    
  </div>


                <div className='div'>
              <section className='sec'>
              <h1 className='h'>宋朝</h1>
              </section>
              <section className='sec'>
              <p className='p'>宋朝（960年-1279年）是中国历史上的一个重要时期。它分为北宋和南宋两个时期。北宋时期，政治稳定，经济繁荣，文化发展达到了巅峰。北宋最为著名的是开创性的科技和文化成就，如活字印刷术和宋词等。南宋时期，虽然面临来自金朝的威胁和南方的地方势力，但南宋在文化和艺术领域仍然取得了很多成就。然而，宋朝最终于1279年灭亡于蒙古的入侵，结束了长达三百多年的统治。尽管如此，宋朝留下了深远的影响，其文化、科技和政治制度对中国历史产生了重要影响</p>
              </section>
              <section className='sec'>
              <h1 className='h2'>伟大的中国君王🏯</h1>
              </section>
            
              </div>
    
            </Scroll>
    
    
    
          {/* <OrbitControls/> */}
    </ScrollControls>
        
    

       

 


       
        


   
  )
}

export default App