import React from "react";
import AboutStyle from "./About.module.css";

const about = () => {
  return (
    <div className={[AboutStyle.container]}>
      <image className={AboutStyle.avatar} />
      <div>
        <h1 className={AboutStyle.title}> Olá,</h1>
        <h3 className={AboutStyle.content}>
          eu sou um estudante de TI me aventurando no mundo de programação.
        </h3>
      </div>
    </div>
  );
};

export default about;
