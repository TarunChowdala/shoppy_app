import Navbar from "../Navbar";

import "./index.css";

const UserDetails = () => {
  return (
    <div className="about-container">
      <Navbar />
      <div className="about-description-container">
        <h1 className="about-us-text">User details</h1>
        <p>User Name : ***********</p>
        <p>Password : ********</p>
      </div>
    </div>
  );
};

export default UserDetails;
