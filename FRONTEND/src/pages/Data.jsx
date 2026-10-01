import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // Optional for success/error messages

const Data = () => {
  // State for storing input data
  const [admindatas, setAdmindatas] = useState({
    name: "",   // Changed from email to name
    phone: "",
    password: "",
  });

  // React Router hook for navigation
  const navigate = useNavigate();

  // Handle input changes
  const handleInput = (e) => {
    const { name, value } = e.target; // Destructure the name and value
    setAdmindatas({
      ...admindatas, // Spread the previous state
      [name]: value, // Update the field being typed
    });
  };

  // Handle form submission
  const handlesubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log("Submitted Data:", admindatas);

    try {
      const response = await fetch("http://localhost:5000/Adminlogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(admindatas),
      });

      // Check if the response is successful
      if (response.ok) {
        setAdmindatas({ name: "", phone: "", password: "" }); // Reset the form state
        toast.success("Login successful!"); // Show success notification
        navigate("/Appointdata"); // Redirect to Appointdata
      } else {
        toast.error("User does not exist!"); // Show error notification
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
      toast.error("Something went wrong. Please try again."); // Show generic error message
    }
  };

  return (
    <div className="unique-login-container">
    <h1 className="unique-login-title">Admin Login</h1>
    <form className="unique-login-form" onSubmit={handlesubmit}>
      {/* Name Input */}
      <input
        type="text"
        name="name" // Changed from email to name
        placeholder="Name"
        value={admindatas.name}
        onChange={handleInput}
        className="unique-input-field"
        required
      />
      {/* Password Input */}
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={admindatas.password}
        onChange={handleInput}
        className="unique-input-field"
        required
      />
      <button type="submit" className="unique-login-button">Login</button>
    </form>
  </div>
  
  );
};

export default Data;
