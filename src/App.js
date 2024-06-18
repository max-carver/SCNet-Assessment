import React from 'react';
import NavBar from './components/NavBar'; // Import the NavBar component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import Map from './components/Map';
import Home from './components/Home';
import DataTable from './components/DataTable';
import Footer from './components/Footer';


const App = () => {
  return (

    <div>
    <Router>
      <div>
        <NavBar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/DataTable" element={<DataTable />} />
        </Routes>
      </div>
    </Router>

    <Footer />

    </div>
  );
};

export default App;

