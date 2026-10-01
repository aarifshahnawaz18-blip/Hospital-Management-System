import React, { useState, useEffect } from 'react';


const Messagedata = () => {
  const [messagesend, setMessagesend] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/getmessage");
        const result = await response.json(); // Parse the response JSON
        console.log("API Response:", result); // Debugging the response
          
        
        if (Array.isArray(result.data)) {
          setMessagesend(result.data); // Access the `data` array
        } else {
          console.error("Unexpected API response structure", result);
          setMessagesend([]); // Fallback for unexpected structures
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setMessagesend([]); // Handle errors gracefully
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar2 />
      <div className="table-container">
        <h1>Messages</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {messagesend.length > 0 ? (
              messagesend.map((user, index) => (
                <tr key={index}>
                  <td>{user.name || "N/A"}</td>
                  <td>{user.phone || "N/A"}</td>
                  <td>{user.message || "N/A"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="no-data">
                  No Messages Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Messagedata;
