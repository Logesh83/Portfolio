import './App.css';
import Educationpg from './Components/Educationpg';
import Homepg from './Components/Homepg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skillspg from './Components/Skillspg';
import Projectpg from './Components/Projectpg';
import Experiencepg from './Components/Experiencepg';
import Contactpg from './Components/Contactpg';
import Intropg from './Components/Intropg';

function App() {
  return (
    <>
    
  <BrowserRouter>
  <Routes>
    <Route path='/' element = {<Intropg />}></Route>
    <Route path='/Homepg' element = {<Homepg />}></Route>
    <Route path='/Educationpg' element = {<Educationpg />}></Route>
    <Route path='/Skillspg' element = {<Skillspg />}></Route>
    <Route path='/Projectpg' element = {<Projectpg/>}></Route>
    <Route path='/Experiencepg' element = {<Experiencepg/>}></Route>
    <Route path='/Contactpg' element = {<Contactpg />}></Route>
  </Routes>
  </BrowserRouter>
  

  
  
  
  
  
    
    </>
   
  );
}

export default App;
