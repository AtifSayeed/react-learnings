import {useState} from 'react';
import './App.css';

const App = () => {
  // const name = "Atif";
  // const Person = (props)=>{
  //   return(
  //     <>
  //     <h1>Name: {props.name}</h1>
  //     <h1>Cleareness: YES</h1>
  //     <h1>Gender: MALE</h1>
  //     </>
  //   );
  // }
  // return (
  //   <div className="App">
  //     <h1>Hello, {name}  </h1>
  //     <Person name={'Johnson'}/>
  //   </div>
  // );
  const [ counter, setCounter] = useState(0);
  return(
    <div className = "App">
      <button onClick={()=>setCounter((prevCount)=> prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={()=>setCounter((prevCount)=> prevCount + 1)}>+</button>
    </div>
  )
 }


export default App;
