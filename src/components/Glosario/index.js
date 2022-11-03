import React from "react";
import GlosarioItem from "../GlosarioItem";
import {Container} from './styles'

function index() {
  const categories = [
    {
      name: "Subcontractors",
      cant: null,
      color: "violet",
    },
    {
      name: "Training",
      cant: 0,
      color: "lightblue",
    },
    {
      name: "Pending status",
      cant: 6,
      color: "red",
    },
    {
      name: "Overassigned",
      cant: null,
      color: "lightblue",
    },
    {
      name: "Low allocation",
      cant: null,
      color: "pink",
    },
  ];

  return (
    <>
      <Container>
        {categories.map(({ name, cant, color }) => {
          return <GlosarioItem name={name} cant={cant} color={color}/>;
        })}
      </Container>
    </>
  );
}

export default index;
