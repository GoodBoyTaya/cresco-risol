import React from 'react';
import Navbar from '../components/navbar/navbar';

function Home() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>Welcome to Our Website</h1>
        <p>Indulge in the authentic flavors of crispy cireng and soft, savory risoles.</p>
      </div>
    </div>

  );
}

export default Home;