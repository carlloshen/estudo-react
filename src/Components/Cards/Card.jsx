import React from "react";
import "./Card.css";
import Times from "../Times/Times";

const Card = (props) => {
  const grupo = props.grupo;
  const team = ([
    {nome:"Brasil"},
    {nome:"Suica"},
    {nome:"Camaroes"},
    {nome:"Servia"},
  ]);

    

  return (
    <div className="back">
      <div className="top">
        <h1>{grupo}</h1>
      </div>
      <div className="bottom">
        <div className="informacoes">
          {team.map((tim)=> <Times nome={tim.nome}  />)}
        </div>
      </div>
    </div>
  );
};

export default Card;
