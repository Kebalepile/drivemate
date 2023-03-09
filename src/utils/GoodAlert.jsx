import React from "react";
import { AiFillAlert } from "react-icons/ai";
import {GrStatusGood} from "react-icons/gr"
export default ({ message = "[Alert message here]" , handleClick}) => {
  return (
    <div className="alert-card good-alert" onClick={handleClick}>
      <GrStatusGood className="good-icon" />
      <hr/>
      <p>{message}</p>
      <p>Try another Category.</p>
    </div>
  );
};
