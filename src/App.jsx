import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


import './App.css'

function App() {
  const [principle, setPrinciple] = useState("")
  const [rate, setRate] = useState("")
  const [year, setYear] = useState("")
  const [interest, setInterest] = useState("")
  const [isPrinciple, setIsPrinciple] = useState(true)
  const [isRate, setIsRate] =useState(true)
  const [isYear, setIsYear] =useState(true)





 const validate = (e)=>{
  const {name, value} = e.target
  console.log(name);
  console.log(value);
  if(!!value.match('^[0-9]*$')){
    if (name=='principle') {
      setPrinciple(value)
      setIsPrinciple(true)
      
    } else if(name=='rate') {
      setRate(value)
      setIsRate(true)
      
    }
    else {
      setYear(value)
      setYear(true)
    }
  }
  else{
    if (name=='principle') {
      setPrinciple(value)
      setIsPrinciple(false)
      
    } else if(name=='rate') {
      setRate(value)
      setIsRate(false)
      
    }
    else {
      setYear(value)
      setYear(false)
    }

    
  }
  
 }

 const handleReset=()=>{
  setPrinciple("")
  setIsPrinciple(true)
  setRate("")
   setIsRate(true) 
   setYear("")
   setIsYear(true)
  
 }

 const handleCalculate =()=>{
  setInterest((principle*rate*year)/100)
 }
  


  

  return (
    <>
    <form className=' bg-dark d-flex justify-content-center align-items-center'>
    <div className='container mt-5 w-50 border shadow p-5 '>
      <h1>Simple Interest App</h1>
      <h6>Calculate your simple interest Easily</h6>
      <div className='mb-3'>
        <div className='container bg-success text-center p-5 rounded'>
          <h1>₹{interest}</h1>
          <h6>Total Simple interest</h6>
          

        </div>
        <div className="my-3">
        <TextField name='principle' value={principle} id="outlined-basic" label="Principle amount" variant="outlined" className='w-100' onChange={(e)=>validate(e)}/>
          { isPrinciple==false && <span className='text-danger'>*Invalid input</span>

          }
        </div>
        <div className="mb-3">
        <TextField name='rate' id="outlined-basic" value={rate} label="Rate of interest" variant="outlined" className='w-100' onChange={(e)=>validate(e)}/>
        { isRate==false && <span className='text-danger'>*Invalid input</span>

}


        </div>
        <div className="mb-3">
        <TextField name='year' id="outlined-basic" label="Year (Yr)" value={year} variant="outlined" className='w-100' onChange={(e)=>validate(e)}/>
        { isYear==false && <span className='text-danger'>*Invalid input</span>

}

        </div>
        <div className="mb-3">
          {/* instead of using stack we can also use  */}
        <Stack spacing={2} direction="row">  
        <Button variant="contained" color='success' className=' p-3 w-50' onClick={handleCalculate} >Calculate</Button>    
        <Button variant="outlined" className='w-50' color='success'onClick={handleReset}>Reset</Button>      
        </Stack>

        </div>

      </div>

     





    </div>
    </form>
      
    </>
  )
}

export default App
