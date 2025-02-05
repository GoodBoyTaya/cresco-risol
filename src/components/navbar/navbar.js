// Navbar.js
import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState('home'); // Default selected item

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <a
            href="/home"
            className={selectedItem === 'home' ? 'selected' : ''}
            onClick={() => handleClick('home')}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/our-story"
            className={selectedItem === 'our-story' ? 'selected' : ''}
            onClick={() => handleClick('our-story')}
          >
            Our Story
          </a>
        </li>
        <li>
          <a
            href="/products"
            className={selectedItem === 'products' ? 'selected' : ''}
            onClick={() => handleClick('products')}
          >
            Products
          </a>
        </li>
        <li>
          <a
            href="/whats-next"
            className={selectedItem === 'whats-next' ? 'selected' : ''}
            onClick={() => handleClick('whats-next')}
          >
            What's Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;