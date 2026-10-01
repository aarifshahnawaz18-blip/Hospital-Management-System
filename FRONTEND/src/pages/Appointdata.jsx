import React, { useState, useEffect } from "react";


const Appointdata = () => {
  const [appoints, setAppoints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/getappointment`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log("Fetched Data:", result); // Debug: Log API response

        // Check if `result.data` is an array and set it to state
        if (Array.isArray(result.data)) {
          setAppoints(result.data);
        } else {
          console.error("Unexpected data structure:", result);
          setAppoints([]); // Fallback to an empty array
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error); // Debug: Log errors
        setError(error.message);
        setLoading(false);
        setAppoints([]);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <Navbar2 />
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Date</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Disease</th>
            </tr>
          </thead>
          <tbody>
            {appoints.length > 0 ? (
              appoints.map((appoint, index) => {
                console.log("Mapping Item:", appoint); // Debug each item
                return (
                  <tr key={index}>
                    <td>{appoint.firstname || "N/A"}</td>
                    <td>{appoint.lastname || "N/A"}</td>
                    <td>{appoint.phone || "N/A"}</td>
                    <td>{appoint.date || "N/A"}</td>
                    <td>{appoint.age || "N/A"}</td>
                    <td>{appoint.gender || "N/A"}</td>
                    <td>{appoint.disease || "N/A"}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="7" className="no-data">
                  No Data Available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Appointdata;
