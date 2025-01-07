import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
       
              <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1 style={{ fontSize: "3rem", color: "#ff6b6b" }}>404</h1>
      <p style={{ fontSize: "1.5rem", color: "#333" }}>Oops! Page not found.</p>
     <Link className='/'>
     <button
       
       style={{
         padding: "0.5rem 1rem",
         fontSize: "1rem",
         color: "#fff",
         backgroundColor: "#007bff",
         border: "none",
         borderRadius: "5px",
         cursor: "pointer",
       }}
     >
       Go to Home
     </button>
     </Link>
    </div>
        
    );
};

export default ErrorPage;