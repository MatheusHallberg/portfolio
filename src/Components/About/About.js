import React from "react";
import AboutStyle from "./About.module.css";

const about = () => {
  return (
    <div className={[AboutStyle.container]}>
      <image className={AboutStyle.avatar} />
      <div>
        <h1 className={AboutStyle.title}> Olá,</h1>
        <h3 className={AboutStyle.content}>
          eu sou um estudante de TI me aventurando no mundo de programação. Meu
          primeiro interesse em programação foi quando acabei dando de cara em
          uma parede invisível em um videogame e muitas perguntas se formaram em
          minha cabeça. Quando não estou estudando ou tentando alguma coisa no VS Code
          eu provavelmente vou estar jogando ou saindo com meus amigos, assistindo anime,
          brincando com meus cachorros.
        </h3>
      </div>
    </div>
  );
};

export default about;
