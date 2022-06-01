import React, { useContext } from "react";
import { themeContext } from "../context/Themecontext";
const Theme = () => {
const {state,dispatch,reducing} = useContext(themeContext)
console.log(state)
  return (
    <div style={{backgroundColor:state,width:"100%",height:"100%"} }> 
      {" "}
      <h1>Theme</h1>
      <div>
        {" "}
        <button onClick={()=> dispatch({"state":"light"})} >light</button>
        <button onClick={()=> dispatch({"state":"dark"})} >dark</button>
      </div>
    </div>
  );
};

export default Theme;
