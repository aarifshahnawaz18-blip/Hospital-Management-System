import React,{useState} from 'react'

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Message = () => {
      const [messagesend, setMessagesend] = useState({
        name: "",
        phone: "",
        message: "",
      });
    
      // Handle input changes
      const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value; // Corrected `e.targetvalue` to `e.target.value`
        setMessagesend({
          ...messagesend,
          [name]: value,
        });
      };
    
      // Handle form submission
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(messagesend);
    
        try{
            const response = await fetch("http://localhost:5000/message", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(messagesend),
            });
        
            // Check if the response is successful
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
        
            const data = await response.json(); // Parse JSON response
            toast.success("message send successfully", data,);
        }catch(error){
          toast.warning("Dont Send Message Again ",error)
        }
    }


    
      return (
        <div className="contact-container">
          <div className="contact-box">
            <h2>CONTACT US</h2>
    
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                value={messagesend.name}
                onChange={handleInput}
                required
              />
    
              <input
                type="number"
                placeholder="Phone Number"
                name="phone"
                value={messagesend.phone} // Bind `value` to state
                onChange={handleInput} // Handle changes
                required
              />
    
              <textarea
                placeholder="Your Message"
                name="message"
                value={messagesend.message} // Bind `value` to state
                onChange={handleInput} // Handle changes
                required
              ></textarea>
    
              <button type="submit">Send →</button>
            </form>
          </div>
        </div>
      );
    };

    
    



export default Message