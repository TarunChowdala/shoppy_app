import { Link } from "react-router-dom";

import "./index.css";

const Undefined = () => {
  return (
    <div className="undefined-container">
      <img
        src="https://res.cloudinary.com/dvtotdiqa/image/upload/v1712988043/c7m41bxwbv9e0d4bfljh.png"
        alt="error"
        className="error-img"
      />
      <p>You have lost the way..!</p>
      <Link to="/">
        <button className="btn btn-danger">Home page</button>
      </Link>
    </div>
  );
};

export default Undefined;
