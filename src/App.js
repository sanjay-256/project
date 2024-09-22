import { useEffect, useState } from 'react';
import CheckboxesGroup from './components/CheckboxesGroup'
import './App.css'

function App() {
  const[load,setLoad]=useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setLoad(false)
    },5000)
  },[])

  if(load){
    return (
      <div className="flex justify-center items-center min-h-screen">
          <img src="Hand giving money.gif" alt="log" className='w-1/2 h-auto border-4 border-green-500 rounded-full'/>
      </div>
    );
  }
  

  return (
    <div className=''>
      <div className='p-5 max-w-4xl mx-auto'>
        <CheckboxesGroup />
      </div>
    </div>
  );
}

export default App;
