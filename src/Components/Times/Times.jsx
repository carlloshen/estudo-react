import React from "react";
import "./Times.css"

const Times = (props)=>{
    const nome = props.nome
    return(
        <div className={`time time-${nome}`}></div>
    )
}

export default Times;