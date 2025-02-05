import React from 'react';
import Navbar from '../components/navbar/navbar';

function WhatsNext() {
  return (
    <div>
        <Navbar/>
      <h1>What's Next?</h1>
      <p>Here are some things you can do next:</p>
      <ul>
        <li>Learn more about our company on the About Us page.</li>
        <li>Check out our products on the Products page.</li>
      </ul>
    </div>
  );
}

export default WhatsNext;