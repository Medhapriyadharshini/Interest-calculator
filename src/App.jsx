
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { calculateNewValue } from '@testing-library/user-event/dist/utils';

function App() {

  const [amount,setAmount]=useState(0);
  const [year,setYear]=useState(0);
  const [rate,setRate]=useState(0);

  const [interest,setInterest]=useState(0);

  console.log(amount,year,rate);

  const calculate=(e)=>{
    const output = amount*year*rate/100;
    console.log(output);
    setInterest(output);
  }

  const reset=(e)=>{
    setAmount(0);
    setYear(0);
    setRate(0);
    setInterest(0);
  }

  return (
    <div className="App">
      <div className='container'>
        <div className="header">
          <h1>Simple Interest Calculator</h1>
          <p>Calculate your simple interest with us💕</p>
        </div>
        <div className="total">
          <h2>&#8377; {interest}</h2>
          <p>Your Total Interest</p>
        </div>
        <div className="form">
          <form>
            <div className="input">
            <TextField value={amount||""} onChange={(e)=>setAmount(e.target.value)} id="outlined-basic" label="Amount" variant="filled" /> <br></br>
            <TextField value={year||""} onChange={(e)=>setYear(e.target.value)} id="filled-basic" label="Year" variant="filled" /><br></br>
            <TextField value={rate||""} onChange={(e)=>setRate(e.target.value)} id="standard-basic" label="Rate" variant="filled" />
            </div>

            <div className="button">
            <Button onClick={e=>calculate(e)} variant="contained">Calculate</Button>
            <Button variant="outlined" onClick={e=>reset(e)}>Reset</Button>
            </div>
          </form>
        </div>

      </div>
      
    </div>
  );
}

export default App;
