import React from "react";
import { GlosarioItemDiv, GlosarioItemStyleP, GlosarioItemCircle } from "./styles";

const GlosarioItem = ({ name, cant, color }) => {
  return (
    <>
      <GlosarioItemDiv>
        <GlosarioItemCircle color={color}/>
        {name}
        <p>{cant != null ? cant > 0 ? cant : 'no resources' : ''}</p>
      </GlosarioItemDiv>
    </>
  );
};

export default GlosarioItem;
