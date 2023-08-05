import React from 'react';
import './CreateStartupDetailsPage.css';

const CreateStartupDetailsPage = () => {
  return (
    <div className="background">
      <div className="details-page">
        <div className="card">
          <h1>Create Startup Details</h1>
          <div className="startup-details">
            <label>Startup Name:</label>
            <input type="text" placeholder="Enter startup name" />
            <label>Industry:</label>
            <input type="text" placeholder="Enter industry" />
            <label>Stage:</label>
            <input type="text" placeholder="Enter stage" />
            <label>Number of Founders:</label>
            <input type="number" placeholder="Enter number of founders" />
            <label>Email:</label>
            <input type="email" placeholder="Enter email" />
            <button className="submit-button" type="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateStartupDetailsPage;
