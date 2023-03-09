import React from "react";
import { AiFillAlert } from "react-icons/ai";

export default ({ message = "[Alert message here]" , handleClick}) => {
  return (
    <div className="alert-card error-alert" onClick={handleClick}>
      <AiFillAlert className="error-icon" />
      <hr/>
      <p>{message}</p>
      <p>Please try again.</p>
    </div>
  );
};
