import logo from './logo.svg';
import './App.css';
import Childcom from './Childcom';
import {useState} from 'react';

function App() {
  const [childname,setChildname]=useState("Default");
  const receiveName=(name)=>{
    setChildname(name);
  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
