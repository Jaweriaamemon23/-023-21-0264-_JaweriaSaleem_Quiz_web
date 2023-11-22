import React from 'react';
import image from '../Assets/image 2 (5).png';

function Footer() {
  const containerStyle = {
    padding: '20px', // Adjust the padding to increase the container size
    background: '#343a40', // Optional: You can customize the background color
  };

  return (
    <>
      <div style={containerStyle} className="text-white d-flex align-items-center justify-content-center mt-5">
        <img
          src={image} // Replace with the actual path to your image
          alt="Your Image"
          width="30"
          height="30"
          className="mr-2" // Added margin to separate the image from text
        />
        All copyrights are reserved by Sukkur IBA University
      </div>
    </>
  );
}

export default Footer;
