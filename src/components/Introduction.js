import React from 'react';
import './Introduction.css'; // Import CSS file for this component

const Introduction = () => {
  return (
    <div className="introduction">
      <div className="profile-picture">
        <img src={require('./pfp.jpg')} />
      </div>
      <div className="introduction-content">
        <h2 className="name">Arihan Awasthi</h2> 
        <h3 className="title">3rd year Student at PES Univeristy, Bangalore</h3>
        {/* <p className="description">A short introduction about yourself</p> */}
      </div>
    </div>
  );
};

export default Introduction;
