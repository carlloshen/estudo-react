import React from "react";
import Card from "./Components/Cards/Card";
import "./App.css";

function App(props) {
  const filhos = props.children;
  return (
    <>
      <div className="Cards">
        <div className="corpo">
          <Card grupo="Group A">{filhos}</Card>
        </div>
        <div className="corpo">
          <Card grupo="Group B">{filhos}</Card>
        </div>
        <div className="corpo">
          <Card grupo="Group C">{filhos}</Card>
        </div>
        <div className="corpo">
          <Card grupo="Group D">{filhos}</Card>
        </div>
        <div className="corpo">
          <Card grupo="Group E">{filhos}</Card>
        </div>

        <div className="corpo">
          <Card grupo="Group F">{filhos}</Card>
        </div>
        <div className="corpo">
          <Card grupo="Group G">{filhos}</Card>
        </div>
        <div className="corpo">
          <Card grupo="Group H">{filhos}</Card>
        </div>
      </div>
    </>
  );
}

export default App;
