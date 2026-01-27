import React from 'react';
import Navbar from '../components/navbar';

const Attendance: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <h1>Attendance</h1>
        <p>Track student attendance here.</p>
      </div>
    </div>
  );
};

export default Attendance;