import React from 'react';
import './ContactLinks.css'; // Import CSS file for this component

const ContactLinks = () => {
  return (
    <div className="contact-links">
      <div >
        <a href='mailto: arihanawasthi01@gmail.com'>
          <button className="contact-box1" style={{ border: "none" }}>Email</button>
        </a>
      </div>
      <div >
        <a href='https://www.linkedin.com/in/arihan-awasthi/'>
          <button className="contact-box2" style={{ border: "none" }}>Linkedin</button>
        </a>
      </div>
      <div >
        <a href='https://github.com/arihan01'>
          <button className="contact-box3" style={{ border: "none" }}>Github</button>
        </a>
      </div>
      <div >
        <a href='discordapp.com/users/332855051997675520'>
          <button className="contact-box4" style={{ border: "none" }}>Discord</button>
        </a>
      </div>
    </div>
  );
};

export default ContactLinks;
