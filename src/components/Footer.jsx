import React from 'react';
import '../CSS/Footer.css'
import '../components/Home'
import '../components/Map'
import '../components/DataTable'



const Footer = () => {
  return (
    <footer>
      <nav>
        <ul>
          {/* Replace these links with your actual navigation items */}
          <li><a href="./Home">Home</a></li>
          <li><a href="./Map">SA Map Stats</a></li>
          <li><a href="./DataTable" >Health Report</a></li>
        </ul>
      </nav>
      <p>&copy; {new Date().getFullYear()} Supply Chain Network Pty LTD</p>
    </footer>
  );
};

export default Footer;
