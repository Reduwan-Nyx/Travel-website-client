
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddTour from './Pages/AddTour/AddTour';
import Booking from './Pages/Booking/Booking';
import About from './Pages/Home/About/About';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import SignUp from './Pages/Login/SignUp';
import ManageTour from './Pages/ManageTour/ManageTour';
import MyOrders from './Pages/MyOrders/MyOrders';
import NotFound from './Pages/NotFound/NotFound';
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
          <Route path="/managetour" element={<PrivateRoute>
            <ManageTour></ManageTour>
          </PrivateRoute>} />
           <Route path="/addtour" element={<PrivateRoute>
            <AddTour></AddTour>
          </PrivateRoute>} />
           <Route path="/myorders" element={<PrivateRoute>
            <MyOrders></MyOrders>
          </PrivateRoute>} /> 
           <Route path="/booking/:serviceId" element={<PrivateRoute>
            <Booking></Booking>
          </PrivateRoute>} />  
          <Route path="/booking/myorders/:id" element={<PrivateRoute>
            <Booking></Booking>
          </PrivateRoute>} /> 
          <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    
    </div>
  );
}

export default App;
