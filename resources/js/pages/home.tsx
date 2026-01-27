import React from 'react';
import Navbar from '../components/navbar';

const Welcome: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <h1>Welcome to Scola</h1>
        <p>This is a Laravel app with React and Material-UI.</p>
      </div>
    </div>
  );
};

export default Welcome;