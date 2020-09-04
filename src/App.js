import React,{useState, createContext} from 'react';
import './App.css';
import Header from './Component/Header./Header';
import Home from './Component/Home/Home';
import Shipment from './Component/Shipment/Shipment';


export const CategoryContext = createContext();

function App() { 
  const [count, setCount] = useState(0)
  return (
    <CategoryContext.provider value = 'laptop'>
      
        <p>count value : {count}</p>
        <Header count = {count} setCount = {setCount}></Header>
        <Home count = {count}></Home>
        <Shipment count = {count}></Shipment>
    
    </CategoryContext.provider>
  );
}

export default App;
