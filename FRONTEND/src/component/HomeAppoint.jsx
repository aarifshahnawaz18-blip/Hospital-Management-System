import React,{useState} from 'react'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomeAppoint = () => {
    const [appoint,setAppoint]=useState({
        firstname:"",
        lastname:"",
        phone:"",
        date:"",
        age:"",
        gender:"",
        disease:""
      })
      
      const handleinput=(e) =>{
      console.log(e)
      const name=e.target.name  
      const value=e.target.value
      
      
      setAppoint({
      ...appoint,
      [name]:value,
      })}
      
      const handlesubmit = async (e) => {
        e.preventDefault(); // Correctly terminated with a semicolon
        console.log(appoint);
      
        
          const response = await fetch(`http://localhost:5000/appointment`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(appoint),
          });
      
          // Check if the response is successful
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
      
          const data = await response.json(); // Parse JSON response
    
          if(data){
          toast.success("Appointment booked Successfully");
      
           }else{
             toast.error("error in booked Appointment"); // Improved logging
           }
    
      }
      
      
    
    
      return (
        <>
        
        
        <div className="form-container">
          <form onSubmit={handlesubmit} className="appointment-form">
            <h2>BOOK YOU APPOINTMENT</h2>
            <div className="form-group">
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                value={appoint.firstname}
                onChange={handleinput}
                required
              />
            </div>
    
            <div className="form-group">
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                value={appoint.lastname}
                onChange={handleinput}
                required
    
              />
            </div>
    
            <div className="form-group">
              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                value={appoint.phone}
                onChange={handleinput}
                required
    
              />
              <input
                type="date"
                name="date"
                value={appoint.date}
                onChange={handleinput}
                required
    
              />
               <input
                type="text"
                name="age"
                value={appoint.age}
                onChange={handleinput}
                required
    
                placeholder="Age"
    
              />
            </div>
    
           
            <div className="form-group">
              <select
                name="gender"
                value={appoint.gender}
                onChange={handleinput}
                required
    
              >
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
    
              <input
                type="text"
                name="disease"
                placeholder="Disease"
                value={appoint.disease}
                onChange={handleinput}
                required
    
              />
            </div>
    
            
    
            
    
            <button type="submit" className="btn-submit">
              BOOK APPOINTMENT
            </button>
          </form>
        </div>
    </>
    
      );
    
    }
    


export default HomeAppoint