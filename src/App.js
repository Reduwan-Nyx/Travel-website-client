
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/Home/About/About';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Services from './Pages/Services/Services';

import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div >
       <Header></Header>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services></Services>} />
        <Route path="/story" element={<About></About>} />
         <Route path="/login" element={<Login></Login>} />
         <Route path="/signup" element={<SignUp></SignUp>} />

       
        
      </Routes>
    
    </div>
  );
}

export default App;
