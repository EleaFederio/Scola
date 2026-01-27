import React from 'react';
import Navbar from '../components/navbar';

const Grade: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <h1>Grades</h1>
        <p>Manage student grades here.</p>
      </div>
    </div>
  );
};

export default Grade;