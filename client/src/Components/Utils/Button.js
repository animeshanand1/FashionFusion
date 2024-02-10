import React from 'react'

function Button({children}) {
    const buttonStyles = {
        backgroundColor: '#4CAF50', /* Green */
        border: 'none',
        color: 'white',
        padding: '15px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '4px 2px',
        cursor: 'pointer',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', // Add a subtle shadow
        transition: 'background-color 0.3s ease', // Smooth background color transition
        outline: 'none', // Remove outline on focus
      };
    
      const buttonHoverStyles = {
        backgroundColor: '#45a049', /* Darker green */
      };
    
      const handleMouseEnter = (event) => {
        event.target.style.backgroundColor = 'red'; // Darker green on hover
      };
    
      const handleMouseLeave = (event) => {
        event.target.style.backgroundColor = '#4CAF50'; // Original green on hover out
      };
  return (
    <button
    style={buttonStyles}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
    {children}
  </button>
  )
}

export default Button