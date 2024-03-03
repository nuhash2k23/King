
import { Model } from '../src/Component/Kingfinal.jsx';



import './App.css';
// import { CameraProvider } './Component/Cameramove.jsx';
import { Scroll, ScrollControls } from '@react-three/drei';


function App() {
  


  return (




  
     
    <ScrollControls pages={4} damping={0.2}>
        
    <Model/>
               <Scroll html>
              <section className='sec'>
              <h1>NUHASH</h1>
              </section>
              <section className='sec'>
              <p>Chineese King OURHAZ</p>
              </section>
              <section className='sec'>
              <h1>WILL IT WORK???</h1>
              </section>
            
              
    
            </Scroll>
    
    
    
          {/* <OrbitControls/> */}
    </ScrollControls>
        
    

       

 


       
        


   
  )
}

export default App