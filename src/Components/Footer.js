import React from 'react';
import image from '../Assets/image 2 (5).png';

function Footer() {
  const containerStyle = {
    padding: '20px', 
      background: '#343a40',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center', // Center the text
  };

  const imageStyle = {
    marginRight: '10px', // Adjust the margin to separate the image from text
    width: '30px',
    height: '30px',
  };

  return (
    <>
      <div style={containerStyle} className="text-white mt-9">
        <img
          src={image} // Replace with the actual path to your image
          alt="Your Image"
          style={imageStyle}
        />
        <span>All copyrights are reserved by Sukkur IBA University</span>
      </div>
    </>
  );
}

export default Footer;
