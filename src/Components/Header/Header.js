import React from "react";
import HeaderStyle from "./Header.module.css";

const header = () => {
  return (
    <div className={[HeaderStyle.backgroundCover].join(" ")}>
      <h1 className={HeaderStyle.title}>Matheus Hallberg Pickersgill</h1>
    </div>
  );
};

export default header;
