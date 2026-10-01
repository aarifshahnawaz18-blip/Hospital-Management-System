import React, { useContext,useEffect } from 'react'
import "./App.css"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import AboutUs from './pages/aboutus.jsx';
import Appointment from './component/Appointment.jsx';
import Data from './pages/Data.jsx';
import Appointdata from './pages/Appointdata.jsx';
import Messagedata from './pages/Mesagedata.jsx';
import HomeAppoint from './component/HomeAppoint.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/home.jsx';


const App = () => {
return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/appointment" element={<Appointment/>}/>
          <Route path="/Data" element={<Data/>}/>
          <Route path="/Messagedata" element={<Messagedata/>}/>
          <Route path="/Appointdata" element={<Appointdata/>}/>
          <Route path="/HomeAppoint" element={<HomeAppoint/>}/>
        </Routes>
        <ToastContainer position="top-center" />
    </Router>
  )
}

export default App