import './App.css';
import React, { useState } from 'react';


function App() {
  //making state of application

  const [weight,setWeight] = useState(0);
  const [height,setHeight] = useState(0);
  const [bmi,setBMI] = useState("");
  const [message,setMessage] = useState("");

  //Logic
  const calcBmi = (e) => {

    e.preventDefault();

    if(weight == 0 || height == 0){
      alert("Please enter a valid weight and height")
    }
    else{
      let bmi = (weight/(height*height))*703
      setBMI(bmi)

      if(bmi<25){
        setMessage('You are Underweight');
      }

      else if(bmi>=25 && bmi < 30){
        setMessage('You are healthy person');
      }

      else{
        setMessage('You are Overweight');
      }
    }
  }

  //reload
  const reload = () => {
    window.location.reload()
  }

  return (
    <div className="App">
      <div className='container'>
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <lebel>Weight (kg)</lebel>
            <input type= 'number' 
              placeholder='Enter weight value' 
              value={weight} 
              onChange={(e) => setWeight(e.target.value)}>
            </input>
          </div>

          <div>
            <lebel>Height (metres)</lebel>
            <input type= 'number' 
              placeholder='Enter height value' 
              value={height} 
              onChange={(event) => setHeight(event.target.value)}>
            </input>
          </div>

          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
          </div>

          <div className='center'>
            <h3>Your BMI is:{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
