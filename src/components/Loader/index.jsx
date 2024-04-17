import { Puff } from "react-loader-spinner";

import "./index.css";

const LoaderItem = () => {
  return (
    <div className="loader-container" data-testid="loader">
      <Puff
        visible={true}
        height="30"
        width="30"
        color="#011222"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default LoaderItem;
