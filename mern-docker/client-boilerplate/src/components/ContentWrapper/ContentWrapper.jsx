import React from "react";
import "./style.css";
function ContentWrapper({ children }) {
  return <div className="container">{children}</div>;
}

export default ContentWrapper;
