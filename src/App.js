import React from 'react';
import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import {increment,decrement} from './actions/action';

function App() {
  const counter=useSelector(state=>state.counter);
  const isUserLogged=useSelector(state=>state.log);
  const dispatch=useDispatch();
  return (
    <div className="App">
<p>Counter value is {counter}</p>
<button onClick={()=>dispatch(increment())}>+</button><button onClick={()=>dispatch(decrement())}>-</button>
  <p>Is User logged: {isUserLogged}</p>
    </div>
  );
}

export default App;
